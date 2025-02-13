import React from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import { useState,Fragment } from "react";
const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge === 0) {
      setError({
        title: "invalid input",
        message:
          "please enter a valid input username and age non empty values .",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid input",
        message: "please enter a  age (>0).",
      });
      return;
    }
    props.onadduser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernamechangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const AgechangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernamechangehandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="Age"
            id="age"
            value={enteredAge}
            onChange={AgechangeHandler}
          />

          <Button type="submit" text="AddUser">
            AddUser
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUsers;
