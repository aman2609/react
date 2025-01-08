import { Link } from "react-router-dom";

const RestaurantCard = (props)=> {

    const {id,name,avgRatingString,sla,cuisines,areaName,cloudinaryImageId} =props

    return (
      
      <div className="card border border-black p-1 w-[23%] h-[20rem] mx-[1%] mb-2 rounded-lg shadow-2xl">
        <Link to={"/restaurant/"+id}>
        <div className="img-container h-[40%] w-[100%]">
          <img className='h-[100%] w-[100%] object-cover rounded-lg'
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          />
        </div>
        <div className="info-container h-[40%] p-1">
          <h3 className='text-2xl font-medium'>{name.length > 24 ? name.substring(0, 23) + "...." : name}</h3>
          <p className='font-medium text-sm'>
          &#x2B50; {avgRatingString} { " • " + sla?.slaString}
          </p>
          <p className='text-lg'>{cuisines.join(", ")}</p>
          <p className='text-lg'>{areaName}</p>
        </div>
        </Link>
      </div>
      
    );
}

export default RestaurantCard;