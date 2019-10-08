import React from "react";
import { DataConsumer } from "../providers/DataContext";
import { Card } from "reactstrap";
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
    <Card style={{ border: "1px solid" }}>
      <h3>{name}</h3>
      <p>Total Score: {totalScore}</p>
      <p>EOC: {monday}</p>
      <p>ClassroomAudit: {tuesday}</p>
      <p>Compliance: {wednesday}</p>
      <p>KnowledgeAccuracy: {thursday}</p>
      <p>CaseHandling: {friday}</p>
    </Card>
  );
}

export default Student;
