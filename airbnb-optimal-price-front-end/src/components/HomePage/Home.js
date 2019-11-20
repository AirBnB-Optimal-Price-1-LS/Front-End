import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
      <button onClick={addListing}>Add Listing</button>
      <h1>HOME</h1>
      <PropertyCardList userProperty={userProperty} history={props.history} />
    </div>
  );
};

export default Home;
