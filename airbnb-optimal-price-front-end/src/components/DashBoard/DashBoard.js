import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import axios from "axios";

//components
import Header from "./Header";

const id = window.localStorage.getItem("userId");

const Dashboard = props => {
  // console.log("DB PROPS:", props);
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
  console.log("users Properties:", userProperty, loggedInUser);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}/property`)
      .then(res => {
        setUserProperty([...userProperty, { ...res.data }]);
        console.log("THE RES:", res);
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}`)
      .then(res => {
        SetLoggedInUser({ ...res.data });
        console.log("user in get/id:", res);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <Header userProperty={userProperty} loggedInUser={loggedInUser} />
      <h1>BASHBOARD STARTS HERE</h1>
    </div>
  );
};

export default Dashboard;
