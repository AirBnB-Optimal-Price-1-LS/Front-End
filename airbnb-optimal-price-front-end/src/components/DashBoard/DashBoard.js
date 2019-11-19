import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

//components
import Header from "./Header";
import AddListing from "../../components/AddListingPage/AddListing";
import EditListing from "../../components/EditListing/EditListing";
import Home from "../../components/HomePage/Home";

const id = window.localStorage.getItem("userId");

const Dashboard = props => {
  console.log("DB PROPS:", props);
  const [userProperty, setUserProperty] = useState([
    // {
    //   id: Date.now(),
    //   minimum_nights: 2,
    //   name: "Kevin's house",
    //   neighborhood: "Santa Barbara",
    //   neighborhood_group: "Downtown SB",
    //   room_type: "Entire house/apt",
    //   user_id: 1
    // }
  ]);
  const [loggedInUser, SetLoggedInUser] = useState([]);
  console.log("users Properties:", userProperty);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}/property`)
      .then(res => {
        setUserProperty([...userProperty, ...res.data]);
        console.log("THE RES:", res);
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
      SetLoggedInUser({ ...res.data });
      console.log("user in get/id:", res);
    })
    .catch(err => console.log(err));
  // }, []);

  if (!userProperty) {
    return <p>Loading...</p>;
  } else {
    return (
      <UserContext.Provider value={{ userProperty, loggedInUser }}>
        <div>
          <Route path="/Dashboard" component={Header} />
          <Route
            path="/Dashboard/Home"
            render={props => {
              return <Home {...props} />;
            }}
          />
          <Route
            path="/Dashboard/addListing"
            render={props => {
              return <AddListing {...props} />;
            }}
          />
          <Route
            path="/Dashboard/EditListing"
            render={props => {
              return <EditListing {...props} />;
            }}
          />
        </div>
      </UserContext.Provider>
    );
  }
};

export default Dashboard;
