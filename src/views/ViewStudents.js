import React from "react";
import { DataConsumer } from "../providers/DataProvider";
import Student from "../components/Student";

function ViewStudents(props) {
  const students = [
    {
      id: 1,
      name: "Daniel",
      totalScore: 85,
      monday: 75,
      tuesday: 90,
      wednesday: 95,
      thursday: 70,
      friday: 80
    },
    {
      id: 2,
      name: "Kathy",
      totalScore: 80,
      monday: 75,
      tuesday: 90,
      wednesday: 95,
      thursday: 70,
      friday: 75
    },
    {
      id: 3,
      name: "Sarah",
      totalScore: 80,
      monday: 75,
      tuesday: 90,
      wednesday: 95,
      thursday: 70,
      friday: 75
    }
  ];
  return (
    <div>
      <p>List of current students</p>
      {students.map(student => {
        return <Student key={student.name} {...student} />;
      })}
      {/* {props.students.map(student => {
        return <Student key={student.name} {...student} />;
      })} */}
    </div>
  );
}

function ViewStudentsWrapper(props) {
  return (
    <DataConsumer>
      {studentProps => <ViewStudents {...props} {...studentProps} />}
    </DataConsumer>
  );
}

export default ViewStudentsWrapper;
