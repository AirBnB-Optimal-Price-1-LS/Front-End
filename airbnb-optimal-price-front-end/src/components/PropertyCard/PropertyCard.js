import React from "react";

const PropertyCard = props => {
  const editProperty = e => {
    e.preventDefault();
    props.history.push("/Dashboard/EditListing");
  };

  const deleteProperty = e => {
    e.preventDefault();
    props.history.push("/Dashboard/Home");
  };

  return (
    <div>
      <h1>Cards Rendered</h1>
      <button onClick={editProperty}>Edit Property</button>
      <button onClick={deleteProperty}>Delete Property</button>
    </div>
  );
};

export default PropertyCard;
