import React from "react";
import { useState } from "react";
import "./FilterSearch.css";
import InputSelect from "../InputSelect/InputSelect";

export const GENDER_OPTION = ["Men", "Women"];

export const FROM_AGE = ["21", "22"];

export const TO_AGE = ["28", "29"];

export const MOTHER_TOUNGE = ["hindi", "bangla"];

export const RELEGION = ["hindu", "muslim"];

export const initalData = {
  looking_for: "",
  from_age: "",
  to_age: "",
  mother_tounge: "",
  relegion: "",
};
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
        <div className="gender_filter">
          <p>I'm looking for a</p>
          <InputSelect
            label="Looking For"
            options={GENDER_OPTION}
            value={searchData.looking_for}
            onChange={(e) => handleInputChange("looking_for", e.target.value)}
          />
        </div>
        <div className="aged_filter">
          <p>aged</p>
          <div className="age_menu">
            <InputSelect
              label="from_age"
              options={FROM_AGE}
              value={searchData.from_age}
              onChange={(e) => handleInputChange("from_age", e.target.value)}
            />
            <span>to</span>

            <InputSelect
              label="from_age"
              options={TO_AGE}
              value={searchData.to_age}
              onChange={(e) => handleInputChange("to_age", e.target.value)}
            />
          </div>
        </div>
        <div className="religion_filter">
          <p>of religion</p>
          <InputSelect
            label="relegion"
            options={RELEGION}
            value={searchData.relegion}
            onChange={(e) => handleInputChange("relegion", e.target.value)}
          />
        </div>
        <div className="mother_tongue">
          <p>and mother tongue</p>
          <InputSelect
            label="mother_tounge"
            options={MOTHER_TOUNGE}
            value={searchData.mother_tounge}
            onChange={(e) => handleInputChange("mother_tounge", e.target.value)}
          />
        </div>
        <div>
          <button className="button-7 " onClick={console.log(searchData)}>
            let's begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
