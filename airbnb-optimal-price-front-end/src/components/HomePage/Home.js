import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./Home.css";

//Components
import PropertyCardList from "../PropertyCard/PropertyCardList";

const Home = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);
  console.log("IN HOME:", userProperty);


  const addListing = e => {
    e.preventDefault();
    props.history.push("/Dashboard/addListing");
  };

  return (
    <div>
      <div className="homeBtnContainer">
        <button className="homeBtn" onClick={addListing}>
          <ion-icon name="add"></ion-icon>
        </button>
      </div>
      <PropertyCardList userProperty={userProperty} history={props.history} />
    </div>
  );
};

export default Home;
