import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "./constants";
import { useEffect, useState } from "react";
function filterRestaurant(restaurantList, searchText) {
  return restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
    console.log(allRestaurants);
    
  }, []);

  async function fetchRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <div className="Body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterRestaurant(allRestaurants, e.target.value);
            setFilteredRestaurants(data);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurant(allRestaurants, searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {allRestaurants.length != 0 ? (
          filteredRestaurants.length == 0 ? (
            <h1>No Matching Restaurant Found</h1>
          ) : (
            filteredRestaurants.map((restaurant, index) => {
              return (            
                <RestaurantCard {...restaurant.info} key={index} />
              )
            })
          )
        ) : (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        )}
      </div>
    </div>
  );
};
export default Body;
