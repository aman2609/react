import { useDispatch } from "react-redux"
import {addItem, removeItem, clearCart} from "../utils/cartSlice"
import { useSelector } from "react-redux"

const MenuCard = (menuCategory) => {
    const cart = useSelector(store => store.cart.items);
    // console.log(menuCategory.card.card.itemCards[0]);
    // console.log(cart);
    
    
    const dispatch = useDispatch()
    const addMenuItem = (item) =>{
        dispatch(addItem(item))
    }

    const removeMenuItem = (item) =>{
        dispatch(removeItem(item))
    }

    // console.log(menuCategory.card.card.itemCards[0])
    // abc = cart.filter((obj)=>{
    //     // console.log(obj);
    //     // console.log(menuCategory.card.card.itemCards[0]);
    //     // console.log(obj.item);
        
    //     return obj.item == menuCategory.card.card.itemCards[0]
    // }
    // );
    // console.log(abc[0]?.count);
    
    
    return (
        <div className="menu-container rounded-2xl py-[1%] px-[2%] mb-[3%] z-10 bg-stone-100 shadow-lg">
        <h2 className='text-2xl text-center mt-2 mb-5'>{menuCategory.card.card.title}</h2>
        <>
        {
            menuCategory.card.card.itemCards.map((item)=>{
                return (
                    <div key={item.card.info.id} className="menu-item-container bg-stone-200 rounded-lg px-[1.5%] max-h-[12%] flex mb-[2%] z-20 shadow-lg">
                        <div className="menu-item-info w-[85%] my-auto">
                            <h3 className='text-xl'>{item.card.info.name}</h3>
                            <p className='text-lg font-semibold'>&#8377; {item.card.info.defaultPrice/100}</p>
                            {!item?.card?.info?.ratings?.aggregatedRating?.rating ? <></> :<p className='text-base font-semibold'>&#x2B50; {item?.card?.info?.ratings?.aggregatedRating?.rating +'('+item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+')'}</p>}
                        </div>
                        <div className="menu-item-image w-[15%] relative">
                                {
                                    item.card.info.imageId?
                                    <>
                                        <img className='w-[100%] h-[100%]' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} alt={item.card.info.name} />
                                        {
                                            cart.filter((obj) =>{
                                                return obj.id === item.card.info.id
                                            })[0]?
                                            <div className="flex bg-white absolute bottom-0 right-0 w-[100%] opacity-40 text-black font-extrabold hover:bg-white hover:opacity-50 hover:text-black">
                                                <button onClick={()=>{removeMenuItem(item)}} className="bg-white w-[33%] left-0 opacity-40 text-black text-base font-extrabold hover:bg-white hover:opacity-50 hover:text-black">-</button>
                                                <div className="w-[33%] items-center text-center"><p className="text-base">{cart.filter((obj)=>{
                                                    return obj.id == item.card.info.id
                                                })[0]?.count}</p></div>
                                                <button onClick={()=>{addMenuItem(item)}} className="bg-white w-[33%] right-0 opacity-40 text-black text-base font-extrabold hover:bg-white hover:opacity-50 hover:text-black">+</button>
                                            </div>
                                            :
                                            <button onClick={()=>{addMenuItem(item)}} className="add-button bg-white absolute bottom-0 right-0 w-[100%] opacity-40 text-black font-extrabold hover:bg-white hover:opacity-50 hover:text-black">ADD</button>               
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            cart.filter((obj) => {
                                                return obj.id === item.card.info.id
                                            })[0]?
                                            <div className="flex px-auto">
                                                <button onClick={()=>{removeMenuItem(item)}} className="bg-white w-[33%] left-0 opacity-40 text-black text-base font-extrabold hover:bg-white hover:opacity-50 hover:text-black">-</button>
                                                <div className="w-[33%] items-center text-center"><p className="text-base">{cart.filter((obj)=>{
                                                    return obj.id == item.card.info.id
                                                })[0]?.count}</p></div>
                                                <button onClick={()=>{addMenuItem(item)}} className="bg-white w-[33%] right-0 opacity-40 text-black text-base font-extrabold hover:bg-white hover:opacity-50 hover:text-black">+</button>
                                            </div>
                                            :
                                            <button onClick={()=>{addMenuItem(item)}} className="add-button no-image">ADD</button>
                                        }
                                    </>
                                }
                        </div>
                    </div>
                )
            })
        }
        </>
        </div>
    )
}

export default MenuCard;