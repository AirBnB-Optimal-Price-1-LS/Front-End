import React, { useContext } from "react";
// import { UserContext } from "../../contexts/UserContext";

const EditListing = props => {
  //   const { userProperty, loggedInUser } = useContext(UserContext);
  //   console.log("Edit FORM:", loggedInUser);

  const EditListing = e => {
    e.preventDefault();

    props.history.push("/Dashboard/Home");
  };

  return (
    <div>
      <h1>Edit LISTING PAGE</h1>
      <form onSubmit={EditListing}>
        <input />
      </form>
      <button onClick={EditListing}>SUBMIT</button>
    </div>
  );
};

export default EditListing;
