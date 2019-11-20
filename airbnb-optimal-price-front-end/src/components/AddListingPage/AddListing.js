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
    <div className="property">
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

      <h1>Optimize Your Airbnb Space</h1>
      <form onSubmit={addListing}>
        <label> 
          <input 
            type="number"
            name="bedrooms"
            value={property.bedrooms || ''}
            onChange={handleChange}
            min="0"
            placeholder="Number of bedrooms"
          />
        </label> 
        <label>
          <input 
            type="number"
            name="bathrooms"
            value={property.bathrooms || ''}
            onChange={handleChange}
            min="0"
            placeholder="Number of bathrooms"
          />
        </label> 
        <label>
          <input 
            type="number"
            name="beds"
            value={property.beds || ''} 
            onChange={handleChange}
            min="0"
            placeholder="Number of beds"
          />
        </label> 
        <label> 
          <input 
            type="number"
            name="security_deposit"
            value={property.security_deposit || ''}
            onChange={handleChange}
            min="0"
            placeholder="Security deposit"
          />
        </label> 
        <label> 
          <input 
            type="number"
            name="cleaning_fee"
            value={property.cleaning_fee || ''}
            onChange={handleChange}
            min="0"
            placeholder="Cleaning fee"
          />
        </label> 
        <label>
          <input 
            type="number"
            name="minimum_nights"
            value={property.minimum_nights || ''}
            onChange={handleChange}
            min="0"
            placeholder="Minimum number of nights"
          />
        </label> 
        <label> 
           <select className="selecting" name="bed_type" value={property.bed_type} onChange={handleChange}>
            <option value="none">What type of bed(s) do you offer?</option>
            <option value="Airbed">Airbed</option>
            <option value="Couch">Couch</option>
            <option value="Futon">Futon</option>
            <option value="Pull-out Sofa">Pull-out Sofa</option>
            <option value="Real Bed">Real Bed</option>
          </select>
        </label> 
        <label> 
          <select className="selecting" name="neighbourhood_group_cleansed" value={property.neighbourhood_group_cleansed} onChange={handleChange}>
            <option value="none">Where is your property?</option>
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
        <label> 
          <select className="selecting" name="room_type" value={property.room_type} onChange={handleChange}>
            <option value="none">What kind of room(s) do you offer?</option>
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
          </select>
        </label> 

      </form>
      <button onClick={addListing}>Submit</button>
    </div>
  );
}

export default AddListing;
