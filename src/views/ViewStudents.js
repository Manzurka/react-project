import React from "react";
import { DataConsumer } from "../providers/DataContext";
import Student from "../components/Student";

function ViewStudents(props) {
  return (
    <div>
      <p>List of current trainers</p>
      {props.students.map(student => {
        return <Student key={student.name} {...student} />;
      })}
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
