import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import "./DashBoard.css";
import { UserContext } from "../../contexts/UserContext";
//components
import Header from "./Header";
import AddListing from "../../components/AddListingPage/AddListing";
import EditListingPage from "../EditListing/EditListingPage";
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
      .get(`/users/${props.userId}/property`)
      .then(res => {
        setUserProperty([...userProperty, ...res.data]);
        console.log("THE RES:", res);
      })
      .then(res => console.log("LOGGING IN...:", res))
      .catch(err => console.log(err));
  }, [props.userId]);

  

  // useEffect(() => {
  //   setUserProperty([...init]);
  // }, []);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/users/${id}`)
  //     .then(res => {
  //       SetLoggedInUser({ ...res.data });
  //       console.log("user in get/id:", res);
  //     })

  //     .catch(err => console.log(err));
  // }, []);
  // if (id === null) {
  //   return <h1> Loading... </h1>;
  // } else {
  return (
    <UserContext.Provider
      value={{ userProperty, loggedInUser, setUserProperty }}
    >
      <div className="mainContainer">
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
          path="/Dashboard/EditListing/:id"
          render={props => {
            return <EditListingPage userProperty={userProperty} {...props} />;
          }}
        />
      </div>
    </UserContext.Provider>
  );
  // }
};

export default Dashboard;
