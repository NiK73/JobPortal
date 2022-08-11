import "./Form.css";
import { InputText } from "primereact/inputtext";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [mainDateRange, setMainDateRange] = useState("");
  const [showValues, setShowValues] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setShowValues(true);
    console.log("true");
    window.open("https://metamask.io/", "_blank");
  };
  useEffect(() => {
    let startDate = "";
    let endDate = "";

    if (selectedDate && selectedDate[0]) {
      startDate = new Date(selectedDate[0]);
    }
    if (selectedDate && selectedDate[1]) {
      endDate = new Date(selectedDate[1]);
    }
    if (startDate) {
      localStorage.setItem("startdate", startDate);
    }
    if (endDate) {
      localStorage.setItem("enddate", endDate);
    }
    if (startDate && endDate) {
      setMainDateRange(
        startDate.toLocaleDateString() + "-" + endDate.toLocaleDateString()
      );
    }

    if (firstName) {
      localStorage.setItem("firstName", firstName);
    }
    if (lastName) {
      localStorage.setItem("lastName", lastName);
    }
  }, [selectedDate, firstName, lastName]);

  useEffect(() => {
    let start = "";
    let end = "";

    if (localStorage.getItem("startdate")) {
      start = new Date(localStorage.getItem("startdate"));
      end = new Date(localStorage.getItem("enddate"));
    }
    if (localStorage.getItem("firstName")) {
      setFirstName(localStorage.getItem("firstName"));
    }
    if (localStorage.getItem("lastName")) {
      setLastName(localStorage.getItem("lastName"));
    }
    // if (localStorage.getItem("endDate")) {

    // }
    if (localStorage.getItem("startdate") && localStorage.getItem("enddate")) {
      console.log(start, end);
      setSelectedDate([start, end]);
    }

    return () => {
      localStorage.clear();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="mt-5 text-center mx-5 py-5 card shadow-lg">
          <h2>Fill the Form</h2>
          <hr />
          <form onSubmit={(e) => submitForm(e)} noValidate>
            <div>
              <label htmlFor="firstname">First Name</label>
              <br></br>
              <InputText
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <br></br>
              <InputText
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="range">Date Range</label>
              <br></br>
              <Calendar
                id="range"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.value)}
                selectionMode="range"
                readOnlyInput
              />
            </div>
            <div className="mt-5 mb-2">
              <Button type="submit" label="Submit" aria-label="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
