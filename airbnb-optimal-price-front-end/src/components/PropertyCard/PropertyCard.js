import React, { useContext } from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { UserContext } from "../../contexts/UserContext";
import "./Card.css";

import Treptow from '../../images/treptow.jpg';
import Lichtenberg from '../../images/lichtenberg.jpg';
import Charlottenburg from '../../images/charlottenburg.jpg';
import Spandau from '../../images/spandau.jpg';
import Neukolln from '../../images/neukolln.jpg';
import Mitte from '../../images/mitte.jpg';
import Friedrichshain from '../../images/friedrichshain.jpg';
import Pankow from '../../images/pankow.jpg';
import Steglitz from '../../images/steglitz.jpg';
import Marzahn  from '../../images/Marzahn.jpg';
import Schoeneberg  from '../../images/schoeneberg.jpg';


const PropertyCard = props => {
  const { userProperty, setUserProperty } = useContext(UserContext);
  // console.log("IN CARD:", props);

  const editProperty = e => {
    e.preventDefault();
    props.history.push(`/Dashboard/EditListing/${props.property.id}`);
  };

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

  const setName = name => {
    if(
      name === 'Lichtenberg' ||
      name === 'Neukölln' ||
      name === 'Pankow' ||
      name === 'Mitte' ||
      name === 'Reinickendorf' ||
      name === 'Treptow-Köpenick' ||
      name === 'Spandau'
      ) {
        return <>{name}<br/>&nbsp;</>
    } else {
      return name;
    }
  }

  const setImage = name => {
    switch(name) {
      case 'Treptow-Köpenick':
        return Treptow;
      case 'Lichtenberg':
        return Lichtenberg;
      case 'Charlottenburg-Wilm.':
        return Charlottenburg;
      case 'Mitte':
        return Mitte;
      case 'Tempelhof-Schöneberg':
        return Schoeneberg;
      case 'Spandau':
        return Spandau;
      case 'Marzahn-Hellersdorf':
        return Marzahn;
      case 'Pankow':
        return Pankow;
      case 'Neukölln':
        return Neukolln;
      case 'Steglitz-Zehlendorf':
        return Steglitz;
      case 'Friedrichshain-Kreuzberg':
        return Friedrichshain;
    }
  }

  return (
    <div className="card-container" key={props.property.id}>
      <div className='image-card'><img src={setImage(props.property.neighbourhood_group_cleansed)}/></div>
      <div className='top-container'>
        <div className='flex'>
          <h2>{setName(props.property.neighbourhood_group_cleansed)}</h2>
          <div className='edit-buttons'>
            <ion-icon className='ion-icon' name="ios-create" onClick={editProperty}></ion-icon>
            <ion-icon className='ion-icon'  name="ios-trash" onClick={deleteProperty}></ion-icon>
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


