import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import axios from "axios";

const InitialPage = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      // axios
      //   .get("https://buildweek-airbnb.herokuapp.com/api/users")
      .get("/users")
      .then(res => console.log("THE RES:", res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>WELCOME TO OUR APPLICATION!</h1>
    </div>
  );
};

export default InitialPage;
