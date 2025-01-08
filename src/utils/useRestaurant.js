import { useEffect, useState } from "react";
function findMenu(restaurant){
    const menuDetail = restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((menu)=>{
        return menu.card.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    return menuDetail;
}
const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        findRestaurantInfo(id)
    },[])
    

    async function findRestaurantInfo(id){
        const restaurantInfo = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER')
        const json = await restaurantInfo.json();
        console.log(json);
        
        setRestaurant(json)
        setMenu(findMenu(json))
    }

    return [restaurant, menu]
}
export default useRestaurant;