import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const  Restaurant = () => {
    // const [restaurant, setRestaurant] = useState(null)
    // const [menu, setMenu] = useState(null)
    const {id} = useParams();
    const [restaurant, menu ] = useRestaurant(id)
    
    
    

    return (!restaurant?<><Shimmer/></>:
      <div className="restaurant-container z-0 ma mx-[25%] my-0 p-[1%]">
        <h1 className='text-center text-5xl'>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h1>
        <div className="delivery-container text-center rounded-lg p-[1.5%] my-[3%] z-10 bg-stone-100 shadow-lg">
          <h4 className='my-[1.2%] mx-0 text-base font-medium'>&#x2B50; {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating} ({restaurant?.data?.cards[2]?.card?.card?.info?.totalRatingsString}) • {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h4>
          <h4 className='my-[1.2%] mx-0 text-base font-medium'>{restaurant?.data?.cards[2]?.card?.card?.info?.cuisines?.join(' , ')}</h4>
          <p className='my-[1.2%] mx-0 text-sm'><b>Outlet</b> {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
          <p className='my-[1.2%] mx-0 text-sm'>{restaurant?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
          <p className='my-[1.2%] mx-0 text-sm'><b>{restaurant?.data?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}</b> | &#8377; {restaurant?.data?.cards[2]?.card?.card?.info?.feeDetails?.totalFee/100} Delivery fee will apply</p>
        </div>
        <h1 className='text-4xl text-center mb-5'>Menu</h1>
        <div className="all-menu-container">
            {menu.map((menuItem,index)=>{
                return <MenuCard key={index}  {...menuItem}/>
            })}
            
          {/* <div className="menu-info">
            
            <h3>Grand Cheese Signature Collection</h3>
            <h3>249</h3>
            <p>
              Potato bun, with rich and crusty cheesy corn patty, topped with
              chunky vegetable-Roasted sauce served with Gherkin slices, Cheddar
              cheese patty and crisp iceberg lettuce and Red cabbage
            </p>
          </div>
          <div className="menu-image">
            <img src="" alt="" />
          </div> */}
        </div>
      </div>
    );
}

export default Restaurant;