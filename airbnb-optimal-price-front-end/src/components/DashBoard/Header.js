import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
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
      <h2>Welcome, {loggedInUser.username}</h2>
      {userProperty.length === 0 ? (
        <p>
          Click Here To Add A Property!{" "}
          <button onClick={redirectToAddListing}>Add Property!</button>
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
