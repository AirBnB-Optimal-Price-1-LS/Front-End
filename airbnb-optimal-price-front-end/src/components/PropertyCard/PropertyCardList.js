import React, { useContext } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import { UserContext } from "../../contexts/UserContext";

const PropertyCardList = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);

  return (
    <div className="card-storage">
      {userProperty
        .sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          } else if (a.id < b.id) {
            return -1;
          } else return 0;
        })
        .map(property => (
          <div key={property.id}>
            <PropertyCard
              key={property.id}
              property={property}
              history={props.history}
            />
          </div>
        ))}
    </div>
  );
};

export default PropertyCardList;
