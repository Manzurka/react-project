import React from "react";

import data from "../data.json";

class Students extends React.Component {
  state = {
    students: [],
    states: [
      {
        id: 1,
        name: "Daniel",
        totalScore: 85,
        monday: 75,
        tuesday: 90,
        wednesday: 95,
        thursday: 70,
        friday: 80
      }
    ]
  };
  getStudentsList() {
    const { region } = this.props;
    const { teacher } = this.props;

    data.map((item, index) => {
      if (item.region === region) {
        console.log("LIST OF TEACHERS", item.teachers);
        item.teachers.map((item, index) => {
          if (item.name === teacher) {
            console.log("LIST OF STUDENTS", item.students);
            this.setState({ students: item.students, teacher });
          }
        });
      }
    });
  }

  render() {
    if (this.props.teacher !== this.state.teacher) {
      this.getStudentsList();
      console.log("After render ", this.state.students);
    }
    return (
      <table
        class="table table-dark table-hover table-striped  table-bordered"
        id="students"
      >
        <thead>{this.renderTableHeader()}</thead>
        <tbody>{this.renderTableData()}</tbody>
      </table>
    );
  }

  renderTableData() {
    console.log("after set state", this.state.students);
    const { students } = this.state; //destructuring
    return students.map((student, index) => {
      const {
        id,
        name,
        totalScore,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
      } = student;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{totalScore}</td>
          <td>{monday}</td>
          <td>{tuesday}</td>
          <td>{wednesday}</td>
          <td>{thursday}</td>
          <td>{friday}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.states[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
}

export default Students;
