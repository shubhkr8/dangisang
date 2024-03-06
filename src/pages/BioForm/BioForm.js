import React, { useState } from "react";
import "./BioForm.css";
import InputBox from "../../components/InputBox/InputBox";
import BioListing from "../BioListing/BioListing";
import { useUserContext } from "../../App";

const initialBioFormData = {
  first_name: "",
  last_name: "",
  middle_name: "",
  date_of_birth: "",
  place_of_bith: "",
  age: "",
  gotra: "",
  complexion: "",
  height: "",
  occupation: "",
  city: "",
  state: "",
  pincode: "",
  full_address: "",
  contant_no: "",
  email_id: "",
  father_name: "",
  mother_name: "",
  siblings: "",
  education: "",
  income: "",
  father_occupation: "",
  mother_occupation: "",
  higher_degree: "",
  caste: "",
};

const BioForm = () => {
  const [bioFormData, setBioFormData] = useState(initialBioFormData);
  const { allProfile, setAllprofile } = useUserContext();

  const handleInputChange = (fieldName, value) => {
    setBioFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllprofile(() => [...allProfile, { ...bioFormData }]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="bioform">
        <h1>Create Bio Data</h1>
        <div className="bioform__container">
          <InputBox
            label="First Name"
            id="first_name"
            type="text"
            value={bioFormData.first_name}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
          />

          <InputBox
            label="Middle Name"
            id="middle_name"
            type="text"
            value={bioFormData.middle_name}
            onChange={(e) => handleInputChange("middle_name", e.target.value)}
          />
          <InputBox
            label="Last Name"
            id="last_name"
            type="text"
            value={bioFormData.last_name}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
          />
          <InputBox
            label="Date of Birth"
            id="date_of_birth"
            type="date"
            value={bioFormData.date_of_birth}
            onChange={(e) => handleInputChange("date_of_birth", e.target.value)}
          />
          <InputBox
            label="Place of Birth"
            id="place_of_bith"
            type="text"
            value={bioFormData.place_of_bith}
            onChange={(e) => handleInputChange("place_of_bith", e.target.value)}
          />
          <InputBox
            label="Age"
            id="age"
            type="text"
            value={bioFormData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
          <InputBox
            label="Gotra"
            id="gotra"
            type="text"
            value={bioFormData.gotra}
            onChange={(e) => handleInputChange("gotra", e.target.value)}
          />
          <InputBox
            label="Caste"
            id="caste"
            type="text"
            value={bioFormData.caste}
            onChange={(e) => handleInputChange("caste", e.target.value)}
          />
          <InputBox
            label="Complextion"
            id="complexion"
            type="text"
            value={bioFormData.complexion}
            onChange={(e) => handleInputChange("complexion", e.target.value)}
          />
          <InputBox
            label="Height"
            id="height"
            type="text"
            value={bioFormData.height}
            onChange={(e) => handleInputChange("height", e.target.value)}
          />
          <InputBox
            label="Occupation"
            id="occupation"
            type="text"
            value={bioFormData.occupation}
            onChange={(e) => handleInputChange("occupation", e.target.value)}
          />
          <InputBox
            label="City"
            id="city"
            type="text"
            value={bioFormData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
          <InputBox
            label="State"
            id="state"
            type="text"
            value={bioFormData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          />
          <InputBox
            label="PinCode"
            id="pincode"
            type="text"
            value={bioFormData.pincode}
            onChange={(e) => handleInputChange("pincode", e.target.value)}
          />
          <InputBox
            label="Full Address"
            id="full_address"
            type="text"
            value={bioFormData.full_address}
            onChange={(e) => handleInputChange("full_address", e.target.value)}
          />
          <InputBox
            label="Contact Number"
            id="contant_no"
            type="text"
            value={bioFormData.contant_no}
            onChange={(e) => handleInputChange("contant_no", e.target.value)}
          />
          <InputBox
            label="Email Id"
            id="email_id"
            type="text"
            value={bioFormData.email_id}
            onChange={(e) => handleInputChange("email_id", e.target.value)}
          />
          <InputBox
            label="Income"
            id="income"
            type="text"
            value={bioFormData.income}
            onChange={(e) => handleInputChange("income", e.target.value)}
          />
          <InputBox
            label=" Highest Degree"
            id="higher_degree"
            type="text"
            value={bioFormData.higher_degree}
            onChange={(e) => handleInputChange("higher_degree", e.target.value)}
          />
          <div className="rfq__submit_button">
            <button type="submit" className="submit_button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <BioListing />
    </>
  );
};

export default BioForm;
