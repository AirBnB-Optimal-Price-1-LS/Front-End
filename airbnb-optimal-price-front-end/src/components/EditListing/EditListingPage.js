import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./EditListingPage.css";

// const intialInput = {
//   id: 1,
//   minimum_nights: 0,
//   name: "Kevin's house",
//   neighborhood: "Santa Barbara",
//   neighborhood_group: "Downtown SB",
//   room_type: "Entire house/apt",
//   user_id: 1
// };

let radioTypes = {
  neighbourhood_group_cleansed: "",
  amenities: []
  // amenities: ["Lock on bedroom door", "Laptop friendly workspace"],
  // bathrooms: 3,
  // bed_type: "Real Bed",
  // bedrooms: 3,
  // beds: 3,
  // cleaning_fee: 25,
  // id: 4,
  // minimum_nights: 1,
  // neighbourhood_group_cleansed: "Charlottenburg-Wilm",
  // room_type: "Entire home/apt",
  // security_deposit: 300,
  // user_id: 3
};

const EditListingPage = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);
  // const [addedProperty, setAddedProperty] = useState(intialInput);
  const [radioType, setRadioType] = useState(radioTypes);
  // console.log("ADD FORM:", addedProperty);
  console.log("EDIT PAGE:", radioType);

  const handleChange = e => {};

  const handleNeighbourhoodChange = changeEvent => {
    setRadioType({
      ...radioType,
      neighbourhood_group_cleansed: changeEvent.target.value
    });
  };
  const handleAmenitiesChange = changeEvent => {
    console.log(changeEvent.target.checked);
    const amenities = radioType.amenities;
    let index;
    changeEvent.target.checked
      ? setRadioType({
          ...radioType,
          amenities: [...radioType.amenities, changeEvent.target.value]
        })
      : (index = amenities.indexOf(+changeEvent.target.value));
    amenities.splice(index, 1);
  };

  useEffect(() => {
    // only set the state if we have data from the api
    // Solves refresh race condition
    if (props.userProperty.length > 0) {
      const newProperty = props.userProperty.find(
        item => `${item.id}` === props.match.params.id
      );
      setRadioType(newProperty);
    }
  }, [props.movies, props.match.params.id]);

  const addListing = e => {
    e.preventDefault();

    props.history.push("/Dashboard/Home");
  };
  return (
    <div className="updateContainer">
      <div className="h1Container">
        <h1>Update Listing</h1>
      </div>
      <form className="form" onSubmit={addListing}>
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
        <div className="amenitiesGroupContainer">
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
