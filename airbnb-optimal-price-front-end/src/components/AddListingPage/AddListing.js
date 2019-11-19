import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const AddListing = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);
  console.log("ADD FORM:", loggedInUser);

  const addListing = e => {
    e.preventDefault();

    props.history.push("/Dashboard/Home");
  };
  return (
    <div>
      <h1>ADD LISTING PAGE</h1>
      <form onSubmit={addListing}>
        <input />
      </form>
      <button onClick={addListing}>SUBMIT</button>
    </div>
  );
};

export default AddListing;
