import { Link } from "react-router-dom";

const RestaurantCard = (props)=> {

    const {id,name,avgRatingString,sla,cuisines,areaName,cloudinaryImageId} =props

    return (
      
      <div className="card">
        <Link to={"/restaurant/"+id}>
        <div className="img-container">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          />
        </div>
        <div className="info-container">
          <h3>{name.length > 24 ? name.substring(0, 23) + "...." : name}</h3>
          <p>
            <b>{avgRatingString + " • " + sla?.slaString}</b>
          </p>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
        </Link>
      </div>
      
    );
}

export default RestaurantCard;