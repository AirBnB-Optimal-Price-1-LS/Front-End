import React, { useContext } from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { UserContext } from "../../contexts/UserContext";
import "./Card.css";

const PropertyCard = props => {
  const { userProperty, setUserProperty } = useContext(UserContext);
  // console.log("IN CARD:", props);

  const editProperty = e => {
    e.preventDefault();
    props.history.push(`/Dashboard/EditListing/${props.property.id}`);
  };

  // console.log(props.property.id);

  const deleteProperty = e => {
    e.preventDefault();
    console.log(props.property.id);
    axiosWithAuth()
      .delete(`/property/${props.property.id}`)
      .then(res => {
        let newProperties = userProperty.filter(
          item => item.id !== props.property.id
        );
        setUserProperty(newProperties);
        props.history.push("/Dashboard/Home");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="card-container" key={props.property.id}>
      <div className="top-container">
        <div className="flex">
          <h2>{props.property.neighbourhood_group_cleansed}</h2>
          <div className="edit-buttons">
            <ion-icon
              className="ion-icon"
              name="ios-create"
              onClick={editProperty}
            ></ion-icon>
            <ion-icon
              className="ion-icon"
              name="ios-trash"
              onClick={deleteProperty}
            ></ion-icon>
          </div>
        </div>
        <div className="property-info">
          <p>Bedrooms: {props.property.bedrooms}</p>
          <p>Bathrooms: {props.property.bathrooms}</p>
          <p>Beds: {props.property.beds}</p>
          <p>Bed Type: {props.property.bed_type}</p>
          <p>Security Deposity: {props.property.security_deposit}</p>
          <p>Cleaning Fee: {props.property.cleaning_fee}</p>
          <p>Room Type: {props.property.room_type}</p>
        </div>
      </div>
      <p className="price">
        ${props.property.estimated_price}
        <span>/night</span>
      </p>
    </div>
  );
};

export default PropertyCard;

{
  /* <div className="cardContainer">
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
    </div> */
}
