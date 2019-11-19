import React from "react";

//styles
import "./Header.css";

const Header = props => {
  console.log("Header:", props.userProperty);
  return (
    <div className="Header-Container">
      <h2>Welcome, {props.loggedInUser.username}</h2>
      {props.userProperty.length === 0 ? (
        <p>
          Click Here To Add A Property! <button>Add Property!</button>
        </p>
      ) : props.userProperty.length === 1 ? (
        <p>
          You currently have {props.userProperty.length} property in your
          inventory
        </p>
      ) : (
        <p>
          You currently have {props.userProperty.length} properties in your
          inventory
        </p>
      )}
    </div>
  );
};

export default Header;
