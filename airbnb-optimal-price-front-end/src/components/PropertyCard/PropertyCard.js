import React from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import "./Card.css";

const PropertyCard = props => {
  console.log("IN CARD:", props);
  const editProperty = e => {
    e.preventDefault();
    props.history.push("/Dashboard/EditListing");
  };

  const deleteProperty = e => {
    e.preventDefault();
    let id = window.localStorage.getItem("userId");
    axiosWithAuth()
      .delete(`/property/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.history.push("/Dashboard/Home");
  };

  return (
    <div className="cardContainer">
      <div className="topHalf">
        <h3>{props.property.name}</h3>
        <p>Minimum Nights: {props.property.minimum_nights}</p>
        <p>Neighborhood: {props.property.neighborhood}</p>
        <p>Neighborhood: {props.property.neighborhood_group}</p>
        <p>Neighborhood: {props.property.room_type}</p>
      </div>
      <div className="bottomHalf">
        <button className="Btn" onClick={editProperty}>
          Edit Property
        </button>
        <button className="Btn" onClick={deleteProperty}>
          Delete Property
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
