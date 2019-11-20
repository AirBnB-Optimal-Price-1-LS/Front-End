import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./addListing.css";

const intialInput = {
  id: 1,
  minimum_nights: 0,
  name: "Kevin's house",
  neighborhood: "Santa Barbara",
  neighborhood_group: "Downtown SB",
  room_type: "Entire house/apt",
  user_id: 1
};

let selected = {
  selectedOption: ""
};

const AddListing = props => {
  const { userProperty, loggedInUser } = useContext(UserContext);
  const [addedProperty, setAddedProperty] = useState(intialInput);
  const [selectedOption, setSelectedOption] = useState(selected);
  console.log("ADD FORM:", addedProperty);
  console.log("SELECTED", selectedOption);

  const handleChange = e => {};

  const handleOptionChange = changeEvent => {
    setSelectedOption({
      selectedOption: changeEvent.target.value
    });
  };

  const addListing = e => {
    e.preventDefault();

    props.history.push("/Dashboard/Home");
  };
  return (
    <div>
      <h1>ADD LISTING PAGE</h1>
      <form onSubmit={addListing}>
        <div className="radioInput1">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={selectedOption.selectedOption === "option1"}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              checked={selectedOption.selectedOption === "option2"}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            Option 2
          </label>
        </div>
      </form>
      <button onClick={addListing}>SUBMIT</button>
    </div>
  );
};

export default AddListing;
