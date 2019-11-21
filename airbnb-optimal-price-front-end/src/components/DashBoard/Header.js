import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import airbnb from './airbnb.png'
//styles
import "./Header.css";


const Header = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);
  console.log("HEADER CONTEXTS:", userProperty, loggedInUser);
  console.log("HIS PROPS", props);

  const redirectToAddListing = () => {
    props.history.push("/Dashboard/addListing");
  };


  return (
    <div className="Header-Container">
      <h2 className="welcomeSign"> <a href="/Dashboard/Home"><img src={airbnb} className="welcomeLogo" /></a>Welcome </h2>
      {userProperty.length === 0 ? (
        <p>
         Loading...
        </p>
      ) : userProperty.length === 1 ? (
        <p>
          You currently have {userProperty.length} property in your inventory
        </p>
      ) : (
        <p>
          You currently have {userProperty.length} properties in your inventory
        </p>
      )}
    </div>
  );
};

export default Header;
