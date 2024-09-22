
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";
import { useState } from "react";
function filterRestaurant(restaurantList,searchText) {
    return restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
}
const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [restaurants,setRestaurants] = useState(restaurantList)
    return (
      <div className="Body">
        <div className="search-container">
          <input type="text" placeholder="Search..." onChange={(e)=>{
            setSearchText(e.target.value)
            console.log(searchText);
            setRestaurants(filterRestaurant(restaurantList,searchText))
            console.log(restaurants                                                                                  );
            
          }} />
          <button className="search-btn" onClick={()=>{
            setRestaurants(filterRestaurant(restaurantList,searchText))
          }}>Search</button>
        </div>
        <div className="restaurant-list">
          {restaurants.map((restaurant, index) => {
            return <RestaurantCard {...restaurant.info} key={index} />;
          })}
        </div>
      </div>
    );
  };
export default Body;