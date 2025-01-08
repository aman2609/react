export function filterRestaurant(restaurantList, searchText) {
    return restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
 