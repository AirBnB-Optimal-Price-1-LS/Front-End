import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./addListing.css";

function AddListing(props){
  const [property, setProperty] = useState({
    "bedrooms":0,
    "bathrooms":0,
    "beds":0,
    "bed_type":"",
    "security_deposit":0,
    "cleaning_fee":0,
    "minimum_nights":0,
    "room_type":"",
    "neighbourhood_group_cleansed":"",
    "amenities":[]
  })

  const handleChange = event => {
    setProperty({
      ...property, 
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  const addListing = e => {
    e.preventDefault();
    console.log(property)
    // props.history.push("/Dashboard/Home");
  };

  // const amenitiesList = [
  //   "Lock on bedroom door",
  //   "Laptop friendly workspace", 
  //   "TV",
  //   "Heating",
  //   "Smoke detector",
  //   "Hair dryer",
  //   "Wifi",
  //   "Shampoo",
  //   "Iron",
  //   "Dishes and silverware",
  //   "Internet",
  //   "Host greets you",
  //   "Hangers",
  //   "Refrigerator",
  //   "Free street parking"
  // ]

  // const addAmenities = event => {
    
  //   if(event.target.value === amenitiesList.filter(item => item === event.target.value)){
  //     console.log('already selected')
  //   } else {
  //       setProperty({
  //     ...property,
  //     [event.target.name]:[...property.amenities, event.target.value]
  //   })
  //   }
  //    console.log(event.target.value)
  //   console.log(property.amenities)
  // }

  return (
    <div>
      {/* {
        amenitiesList.map(item => {
          return(
             <select key={item} name="amenities" value={property.amenities} onClick={addAmenities} >
                <option value={item}>{item}</option>
             </select>
          )
        })
      }
      
      {
        amenitiesList.map(item => {
          return(
            <label> {item}
            <input 
              type="radio"
              name="amenities"
              value={item}
              onClick={addAmenities}
              key={item}
            />
            </label>
          )
        })

      } */}

      <h1>Let's optimize your Airbnb listing!</h1>
      <h3>What kind of space do you have?</h3>
      <form onSubmit={addListing}>
        <label> Number of bedrooms
          <input 
            type="number"
            name="bedrooms"
            value={property.bedrooms || ''}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Number of bathrooms
          <input 
            type="number"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Number of beds
          <input 
            type="number"
            name="beds"
            value={property.beds}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Type of bed(s)
           <select name="bed_type" value={property.bed_type} onChange={handleChange}>
            <option value="none">Select Bed Type</option>
            <option value="Airbed">Airbed</option>
            <option value="Couch">Couch</option>
            <option value="Futon">Futon</option>
            <option value="Pull-out Sofa">Pull-out Sofa</option>
            <option value="Real Bed">Real Bed</option>
          </select>
        </label> 
        <label> Security deposit
          <input 
            type="number"
            name="security_deposit"
            value={property.security_deposit}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Cleaning fee
          <input 
            type="number"
            name="cleaning_fee"
            value={property.cleaning_fee}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Minimum number of nights
          <input 
            type="number"
            name="minimum_nights"
            value={property.minimum_nights}
            onChange={handleChange}
            min="0"
          />
        </label> 
        <label> Where is your property?
          <select name="neighbourhood_group_cleansed" value={property.neighbourhood_group_cleansed} onChange={handleChange}>
            <option value="none">Select Neighbourhood</option>
            <option value="Spandau">Spandau</option>
            <option value="Marzahn - Hellersdorf">Marzahn - Hellersdorf</option>
            <option value="Steglitz - Zehlendorf">Steglitz - Zehlendorf</option>
            <option value="Treptow - Köpenick">Treptow - Köpenick</option>
            <option value="Lichtenberg">Lichtenberg</option>
            <option value="Tempelhof - Schöneberg">Tempelhof - Schöneberg</option>
            <option value="Charlottenburg-Wilm.">Charlottenburg-Wilm.</option>
            <option value="Neukölln">Neukölln</option>
            <option value="Pankow">Pankow</option>
            <option value="Mitte">Mitte</option>
            <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
          </select>
        </label> 
        <label> What type of room?
          <select name="room_type" value={property.room_type} onChange={handleChange}>
            <option value="none">Select Room Type</option>
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
          </select>
        </label> 

      </form>
      <button onClick={addListing}>SUBMIT</button>
    </div>
  );
}

export default AddListing;
