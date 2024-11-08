import { IMG_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
  
    const {
      name,
      cuisines,
      costForTwo,
      avgRating,
      cloudinaryImageId,
      sla
    } = resData?.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={IMG_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} star</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    );
};

export default RestaurentCard;