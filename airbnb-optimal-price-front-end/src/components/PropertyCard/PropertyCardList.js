import React, {useContext} from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import {UserContext} from '../../contexts/UserContext'

const PropertyCardList = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);



  return (
    <div className="card-storage">
      {userProperty.map(property => (
        <div key={property.id}>
          <PropertyCard
          key={property.id}
          property={property}
          history={props.history}/>
          </div>
      ))}
    </div>
  );
};

export default PropertyCardList;
