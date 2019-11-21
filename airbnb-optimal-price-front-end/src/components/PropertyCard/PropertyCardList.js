import React, {useEffect} from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyCardList = props => {
  // useEffect(() => {
  //   props.userProperty
  // })


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
