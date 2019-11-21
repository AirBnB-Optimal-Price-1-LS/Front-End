import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { UserContext } from "../../contexts/UserContext";
import "../AddListingPage/addListing.css";

const EditListing = props => {
  const { userProperty, loggedInUser, setUserProperty } = useContext(
    UserContext
  );
  console.log("IN EDIT FORM PROPS MATCH:", props.match.params.id);
  console.log("USER PROPERTIES IN UPDATE FORM:", userProperty);
  let id = parseInt(localStorage.getItem("userId"));
  console.log(id);

  const [property, setProperty] = useState({
    id: Date.now(),
    bedrooms: 0,
    bathrooms: 0,
    beds: 0,
    bed_type: "",
    security_deposit: 0,
    cleaning_fee: 0,
    minimum_nights: 0,
    room_type: "",
    neighbourhood_group_cleansed: "",
    amenities: "null"
  });

  useEffect(() => {
    // only set the state if we have data from the api
    // Solves refresh race condition
    if (userProperty.length > 0) {
      const newProperty = userProperty.find(
        item => `${item.id}` === props.match.params.id
      );
      setProperty(newProperty);
    }
  }, [userProperty, props.match.params.id]);

  const handleChange = event => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value
    });
  };

  const addListing = event => {
    event.preventDefault();
    // console.log(radioType);
    axiosWithAuth()
      .get(
        `https://airbnb-prediction-api.herokuapp.com?bedrooms=${property.bedrooms}&bathrooms=${property.bathrooms}&beds=${property.beds}&bed_type=${property.bed_type}&security_deposit=${property.security_deposit}&cleaning_fee=${property.cleaning_fee}&minimum_nights=${property.minimum_nights}&room_type=${property.room_type}&neighbourhood_group_cleansed=${property.neighbourhood_group_cleansed}&amenities=null`
      )
      .then(response => {
        console.log("THE RES:", response.data);
        // console.log(props.match.params.id);
        axiosWithAuth().put(
          `/property/${props.match.params.id}`,
          response.data
        );
        let updatedProperties = userProperty.filter(
          item => item.id !== props.match.params.id
        );
        console.log("UPDATED PROPERTY === :", updatedProperties);
        // console.log("updatedProperties", updatedProperties);
        setUserProperty([...updatedProperties, response.data]);
        // props.history.push("/Dashboard/Home");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="property">
      <h1>Optimize Your Airbnb Space</h1>
      <form onSubmit={addListing}>
        <label>
          <input
            type="number"
            name="bedrooms"
            value={property.bedrooms || ""}
            onChange={handleChange}
            min="0"
            placeholder="Number of bedrooms"
          />
        </label>
        <label>
          <input
            type="number"
            name="bathrooms"
            value={property.bathrooms || ""}
            onChange={handleChange}
            min="0"
            placeholder="Number of bathrooms"
          />
        </label>
        <label>
          <input
            type="number"
            name="beds"
            value={property.beds || ""}
            onChange={handleChange}
            min="0"
            placeholder="Number of beds"
          />
        </label>
        <label>
          <input
            type="number"
            name="security_deposit"
            value={property.security_deposit || ""}
            onChange={handleChange}
            min="0"
            placeholder="Security deposit"
          />
        </label>
        <label>
          <input
            type="number"
            name="cleaning_fee"
            value={property.cleaning_fee || ""}
            onChange={handleChange}
            min="0"
            placeholder="Cleaning fee"
          />
        </label>
        <label>
          <input
            type="number"
            name="minimum_nights"
            value={property.minimum_nights || ""}
            onChange={handleChange}
            min="0"
            placeholder="Minimum number of nights"
          />
        </label>
        <label>
          <select
            className="selecting"
            name="bed_type"
            value={property.bed_type}
            onChange={handleChange}
          >
            <option value="none">What type of bed(s) do you offer?</option>
            <option value="Airbed">Airbed</option>
            <option value="Couch">Couch</option>
            <option value="Futon">Futon</option>
            <option value="Pull-outSofa">Pull-out Sofa</option>
            <option value="RealBed">Real Bed</option>
          </select>
        </label>
        <label>
          <select
            className="selecting"
            name="neighbourhood_group_cleansed"
            value={property.neighbourhood_group_cleansed}
            onChange={handleChange}
          >
            <option value="none">Where is your property?</option>
            <option value="Spandau">Spandau</option>
            <option value="Marzahn-Hellersdorf">Marzahn - Hellersdorf</option>
            <option value="Steglitz-Zehlendorf">Steglitz - Zehlendorf</option>
            <option value="Treptow-Köpenick">Treptow - Köpenick</option>
            <option value="Lichtenberg">Lichtenberg</option>
            <option value="Tempelhof-Schöneberg">Tempelhof - Schöneberg</option>
            <option value="Charlottenburg-Wilm.">Charlottenburg-Wilm.</option>
            <option value="Neukölln">Neukölln</option>
            <option value="Pankow">Pankow</option>
            <option value="Mitte">Mitte</option>
            <option value="Friedrichshain-Kreuzberg">
              Friedrichshain-Kreuzberg
            </option>
          </select>
        </label>
        <label>
          <select
            className="selecting"
            name="room_type"
            value={property.room_type}
            onChange={handleChange}
          >
            <option value="none">What kind of room(s) do you offer?</option>
            <option value="Privateroom">Private room</option>
            <option value="Entirehome/apt">Entire home/apt</option>
            <option value="Sharedroom">Shared room</option>
          </select>
        </label>
      </form>
      <button onClick={addListing}>Submit</button>
    </div>
  );
};

export default EditListing;
