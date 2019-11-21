import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import airbnb from './airbnb.png'
//styles
import "./Header.css";

const Header = props => {
  const { userProperty } = useContext(UserContext);
  // console.log("HEADER CONTEXTS:", userProperty, loggedInUser);
  // console.log("HIS PROPS", props);

  const redirectToAddListing = () => {
    props.history.push("/Dashboard/addListing");
  };

  return (
    <div className="Header-Container">
      <h2 className="welcomeSign"> <a href="/Dashboard/Home"><img src={airbnb} className="welcomeLogo" /></a>Welcome </h2>
      {userProperty.length === 0 ? (
        <a className="noProperties" href="/">Logout</a>
      ) : userProperty.length === 1 ? (
        <p>
          You currently have {userProperty.length} property in your inventory
        </p>
      ) : (
        <div className="rightHeader">
        <p>
          You currently have {userProperty.length} properties in your inventory
        </p>
        <a href="/">Logout</a>
        </div>
      )}
    </div>
  );
};

export default Header;
