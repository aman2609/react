import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "./constants";
import { useEffect, useState } from "react";
import { filterRestaurant } from "../utils/helper";

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
    
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <div className="Body mx-[12%] my-0">
      <div className="search-container h-[2%] w-[30%] mx-auto my-4 ">
        <input
        className='w-[70%] border border-black rounded-md px-2 py-1 mr-1'
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
          className="search-btn w-[28%] border py-1 border-black rounded-md hover:bg-slate-200"
          onClick={() => {
            const data = filterRestaurant(allRestaurants, searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list p-[1.2%] border border-black h-[80%] flex flex-wrap justify-between">
        {allRestaurants?.length != 0 ? (
          filteredRestaurants?.length == 0 ? (
            <h1>No Matching Restaurant Found</h1>
          ) : (
            filteredRestaurants?.map((restaurant, index) => {
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
