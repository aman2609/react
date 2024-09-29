import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";


function findMenu(restaurant){
    const menuDetail = restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((menu)=>{
        return menu.card.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    return menuDetail;
}

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        findRestaurantInfo(id)
    },[])
    console.log(menu);
    

    async function findRestaurantInfo(id){
        const restaurantInfo = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER')
        const json = await restaurantInfo.json();
        setRestaurant(json)
        setMenu(findMenu(json))
    }
    
    

    return (!restaurant?<><Shimmer/></>:
      <div className="restaurant-container">
        <h1>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h1>
        <div className="delivery-container">
          <h4>&#x2B50; {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating} ({restaurant?.data?.cards[2]?.card?.card?.info?.totalRatingsString}) • {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h4>
          <h4>{restaurant?.data?.cards[2]?.card?.card?.info?.cuisines?.join(' , ')}</h4>
          <p><b>Outlet</b> {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
          <p>{restaurant?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
          <p><b>{restaurant?.data?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}</b> | &#8377; {restaurant?.data?.cards[2]?.card?.card?.info?.feeDetails.totalFee/100} Delivery fee will apply</p>
        </div>
        <h1>Menu</h1>
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