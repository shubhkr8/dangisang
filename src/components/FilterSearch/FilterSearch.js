import React from "react";
import { useState } from "react";
import "./FilterSearch.css";
import InputSelect from "../InputSelect/InputSelect";
import {
  FROM_AGE,
  GENDER_OPTION,
  STATE,
  TO_AGE,
  initalData,
} from "./FilterConstant";

const FilterSearch = () => {
  const [searchData, setSearchData] = useState(initalData);
  const handleInputChange = (fieldName, value) => {
    setSearchData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  return (
    <div className="FilterSearch">
      <div className="FilterSearch_elm">
        <InputSelect
          label="I'm looking for a"
          options={GENDER_OPTION}
          value={searchData.looking_for}
          onChange={(e) => handleInputChange("looking_for", e.target.value)}
        />
        <InputSelect
          label="Age"
          options={FROM_AGE}
          value={searchData.from_age}
          onChange={(e) => handleInputChange("from_age", e.target.value)}
        />
        <span>to</span>
        <InputSelect
          options={TO_AGE}
          value={searchData.to_age}
          onChange={(e) => handleInputChange("to_age", e.target.value)}
        />
        <InputSelect
          label="State"
          options={STATE}
          value={searchData.relegion}
          onChange={(e) => handleInputChange("relegion", e.target.value)}
        />
        <button className="button-7 " onClick={console.log(searchData)}>
          let's begin
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
