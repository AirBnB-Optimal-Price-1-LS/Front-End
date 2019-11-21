import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import "./EditListingPage.css";


const EditListingPage = props => {
  const { userProperty, loggedInUser, setUserProperty } = useContext(
    UserContext
  );
  // const [addedProperty, setAddedProperty] = useState(intialInput);
  const [radioType, setRadioType] = useState([]);
  // const [radioType, setRadioType] = useState(radioTypes);
  // console.log("ADD FORM:", addedProperty);
  console.log("EDIT PAGE:", radioType);

  const handleNeighbourhoodChange = changeEvent => {
    setRadioType({
      ...radioType,
      neighbourhood_group_cleansed: changeEvent.target.value
    });
  };

  const handleBedTypeChange = changeEvent => {
    setRadioType({
      ...radioType,
      bed_type: changeEvent.target.value
    });
  };

  const handleRoomChange = changeEvent => {
    setRadioType({
      ...radioType,
      room_type: changeEvent.target.value
    });
  };

  // const handleAmenitiesChange = changeEvent => {
  //   console.log(changeEvent.target.checked);
  //   const amenities = radioType.amenities;
  //   let index;
  //   changeEvent.target.checked
  //     ? setRadioType({
  //         ...radioType,
  //         amenities: [...radioType.amenities, changeEvent.target.value]
  //       })
  //     : (index = amenities.indexOf(+changeEvent.target.value));
  // };

  const handleChange = e => {
    let propertyId = props.match.params.id;
    setRadioType({
      ...radioType,
      id: propertyId,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // only set the state if we have data from the api
    // Solves refresh race condition
    if (userProperty.length > 0) {
      const newProperty = userProperty.find(
        item => `${item.id}` === props.match.params.id
      );
      setRadioType(newProperty);
    }
  }, [userProperty, props.match.params.id]);

  // const addListing = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put(`/property/${props.match.params.id}`, radioType)
  //     .then(res => {
  //       console.log(res);
  //       // setUserProperty()
  //     })
  //     .catch(err => console.log(err));
  //   props.history.push("/Dashboard/Home");
  // };

const addListing = event => {
    event.preventDefault();
    console.log(radioType)
    axiosWithAuth()
    .get(`https://airbnb-prediction-api.herokuapp.com?bedrooms=${radioType.bedrooms}&bathrooms=${radioType.bathrooms}&beds=${radioType.beds}&bed_type=${radioType.bed_type}&security_deposit=${radioType.security_deposit}&cleaning_fee=${radioType.cleaning_fee}&minimum_nights=${radioType.minimum_nights}&room_type=${radioType.room_type}&neighbourhood_group_cleansed=${radioType.neighbourhood_group_cleansed}&amenities=null`)
     .then(response => {
          console.log(response.data)
          if(response.data){
              axiosWithAuth().put(`/property/${props.match.params.id}`, response.data)
              .then(response => {
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
              })
          }          
     })
     .catch(error => {
          console.log(error)
     })
     props.history.push("/Dashboard/Home");
  };



  return (
    <div className="updateContainer">
      <div className="h1Container">
        <h1>Update Listing</h1>
      </div>
      <form className="editPageForm" onSubmit={() => addListing}>
        
        <div className="neighbourhoodGroupContainer">
          <h2>Neighborhood: </h2>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Spandau"
              checked={radioType.neighbourhood_group_cleansed === "Spandau"}
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Spandau
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Marzahn - Hellersdorf"
              checked={
                radioType.neighbourhood_group_cleansed ===
                "Marzahn - Hellersdorf"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Marzahn - Hellersdorf
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Reinickendorf"
              checked={
                radioType.neighbourhood_group_cleansed === "Reinickendorf"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Reinickendorf
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Steglitz - Zehlendorf"
              checked={
                radioType.neighbourhood_group_cleansed ===
                "Steglitz - Zehlendorf"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Steglitz - Zehlendorf
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Treptow - Köpenick"
              checked={
                radioType.neighbourhood_group_cleansed === "Treptow - Köpenick"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Treptow - Köpenick
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Lichtenberg"
              checked={radioType.neighbourhood_group_cleansed === "Lichtenberg"}
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Lichtenberg
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Tempelhof - Schöneberg"
              checked={
                radioType.neighbourhood_group_cleansed ===
                "Tempelhof - Schöneberg"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Tempelhof - Schöneberg
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Charlottenburg-Wilm."
              checked={
                radioType.neighbourhood_group_cleansed ===
                "Charlottenburg-Wilm."
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Charlottenburg-Wilm
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Neukölln"
              checked={radioType.neighbourhood_group_cleansed === "Neukölln"}
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Neukölln
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Pankow"
              checked={radioType.neighbourhood_group_cleansed === "Pankow"}
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Pankow
          </label>
          <label>
            <input
              type="radio"
              name="neighbourhood_group_cleansed"
              value="Friedrichshain-Kreuzberg"
              checked={
                radioType.neighbourhood_group_cleansed ===
                "Friedrichshain-Kreuzberg"
              }
              onChange={handleNeighbourhoodChange}
              className="form-check-input"
            />
            Friedrichshain-Kreuzberg
          </label>
        </div>
        {/* <div className="amenitiesGroupContainer">
          <h2>Amenities:</h2>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Lock on bedroom door"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Lock on bedroom door
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Laptop friendly workspace"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Laptop friendly workspace
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="TV"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            TV
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Heating"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Heating
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Smoke detector"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Smoke detector
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Hair dryer"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Hair dryer
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Wifi"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Wifi
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Shampoo"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Shampoo
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Iron"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Iron
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Dishes and silverware"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Dishes and silverware
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Internet"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Internet
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Host greets you"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Host greets you
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Hangers"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Hangers
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value="Refrigerator"
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Refrigerator
          </label>
          <label>
            <input
              type="checkbox"
              name={radioType.amenities}
              value={radioType.amenities}
              onChange={handleAmenitiesChange}
              className="form-check-input"
            />
            Free street parking
          </label>
        </div> */}
        <div className="bedTypeContainer">
          <h2>Bed Type: </h2>
          <label>
            <input
              type="radio"
              name="bed_type"
              value="Airbed"
              checked={radioType.bed_type === "Airbed"}
              onChange={handleBedTypeChange}
              className="form-check-input"
            />
            Airbed
          </label>
          <label>
            <input
              type="radio"
              name="bed_type"
              value="Futon"
              checked={radioType.bed_type === "Futon"}
              onChange={handleBedTypeChange}
              className="form-check-input"
            />
            Futon
          </label>
          <label>
            <input
              type="radio"
              name="bed_type"
              value="Couch"
              checked={radioType.bed_type === "Couch"}
              onChange={handleBedTypeChange}
              className="form-check-input"
            />
            Couch
          </label>
          <label>
            <input
              type="radio"
              name="bed_type"
              value="Pull-out Sofa"
              checked={radioType.bed_type === "Pull-out Sofa"}
              onChange={handleBedTypeChange}
              className="form-check-input"
            />
            Pull-out Sofa
          </label>
          <label>
            <input
              type="radio"
              name="bed_type"
              value="Real Bed"
              checked={radioType.bed_type === "Real Bed"}
              onChange={handleBedTypeChange}
              className="form-check-input"
            />
            Real Bed
          </label>
        </div>
        <div className="roomTypeContainer">
          <h2>Room Type: </h2>
          <label>
            <input
              type="radio"
              name="room_type"
              value="Private room"
              checked={radioType.room_type === "Private room"}
              onChange={handleRoomChange}
              className="form-check-input"
            />
            Private room
          </label>
          <label>
            <input
              type="radio"
              name="room_type"
              value="Entire home/apt"
              checked={radioType.room_type === "Entire home/apt"}
              onChange={handleRoomChange}
              className="form-check-input"
            />
            Entire home/apt
          </label>
          <label>
            <input
              type="radio"
              name="room_type"
              value="Shared room"
              checked={radioType.room_type === "Shared room"}
              onChange={handleRoomChange}
              className="form-check-input"
            />
            Shared room
          </label>
        </div>
        <div className="regularInputContainer">
          <label>
            Bathrooms:
            <input
              type="text"
              placeholder="How Many Bathrooms?"
              name="bathrooms"
              value={radioType.bathrooms}
              onChange={handleChange}
            />
          </label>
          <label>
            Bedrooms:
            <input
              type="text"
              placeholder="How many Bedrooms?"
              name="bedrooms"
              value={radioType.bedrooms}
              onChange={handleChange}
            />
          </label>
          <label>
            Beds:
            <input
              type="text"
              placeholder="How many beds?"
              name="beds"
              value={radioType.beds}
              onChange={handleChange}
            />
          </label>
          <label>
            Cleaning Fee:
            <input
              type="text"
              placeholder="Cleaning Fee?"
              name="cleaning_fee"
              value={radioType.cleaning_fee}
              onChange={handleChange}
            />
          </label>
          <label>
            Minimum Nights:
            <input
              type="text"
              placeholder="Minimum Night?"
              name="minimum_nights"
              value={radioType.minimum_nights}
              onChange={handleChange}
            />
          </label>
          <label>
            Security Deposit:
            <input
              type="text"
              placeholder="Security Deposit?"
              name="security_deposit"
              value={radioType.security_deposit}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <div className="btnContainer">
        <button className="editSubmitBtn" onClick={addListing}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default EditListingPage;


