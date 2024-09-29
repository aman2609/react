const MenuCard = (menuCategory) => {
    
    return (
        <div className="menu-container">
        <h2>{menuCategory.card.card.title}</h2>
        <>
        {
            menuCategory.card.card.itemCards.map((item)=>{
                return (
                    <div key={item.card.info.id} className="menu-item-container">
                        <div className="menu-item-info">
                            <h3>{item.card.info.name}</h3>
                            <p><b>&#8377; {item.card.info.price/100}</b></p>
                            {!item?.card?.info?.ratings?.aggregatedRating?.rating ? <></> :<p>&#x2B50;{item?.card?.info?.ratings?.aggregatedRating?.rating +'('+item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+')'}</p>}
                        </div>
                        <div className="menu-item-image">
                            {
                                item.card.info.imageId?<><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} alt={item.card.info.name} />
                                <button className="add-button">ADD</button></>:<button className="add-button no-image">ADD</button>
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