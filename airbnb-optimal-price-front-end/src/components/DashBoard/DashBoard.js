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
  // console.log("DB PROPS:", props);
  const [userProperty, setUserProperty] = useState([]);
  console.log("users Properties:", userProperty);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${window.localStorage.getItem("userId")}/property`)
      .then(res => {
        setUserProperty([...userProperty, ...res.data]);
      })
      .catch(err => console.log(err));
  }, [props.userId]);

  return (
    <UserContext.Provider value={{ userProperty, setUserProperty }}>
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
            return (
              <EditListingPage
                userProperty={userProperty}
                {...props}
                // loggedInUser={loggedInUser}
              />
            );
          }}
        />
      </div>
    </UserContext.Provider>
  );
};

export default Dashboard;
