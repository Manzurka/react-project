import React from "react";
import { DataConsumer } from "../providers/DataProvider";

function Student(props) {
  const {
    name,
    totalScore,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday
  } = props;

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>{name}</h3>
      <p>Total Score: {totalScore}</p>
      <p>Monday: {monday}</p>
      <p>Tuesday: {tuesday}</p>
      <p>Wednesday: {wednesday}</p>
      <p>Thursday: {thursday}</p>
      <p>Friday: {friday}</p>
    </div>
  );
}

export default Student;
