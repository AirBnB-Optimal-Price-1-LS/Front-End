import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyCardList = props => {
  return (
    <div className="card-storage">
      {props.userProperty.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          history={props.history}
        />
      ))}
    </div>
  );
};

export default PropertyCardList;
