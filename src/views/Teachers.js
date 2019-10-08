import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import Students from "./Students";
class Teachers extends React.Component {
  state = {
    headers: [
      {
        ID: 1,
        Manager: "Ken",
        TotalScore: 85,
        EOC: 75,
        ClassroomAudit: 90,
        Compliance: 95,
        KnowledgeAccuracy: 70,
        CaseHandling: 80
      }
    ],
    teachers: []
  };

  getTeachersList() {
    const { region } = this.props;
    console.log(data);
    data.map((item, index) => {
      if (item.region === region) {
        this.setState({ teachers: item.teachers, region });
        console.log("after set state", this.state.teachers);
      }
    });
  }

  render() {
    if (this.props.region !== this.state.region) {
      this.getTeachersList();
      console.log("After function ", this.state.teachers);
    }
    console.log("after render", this.state.teachers);
    return (
      <table
        class="table table-dark table-hover table-striped  table-bordered"
        id="teachers"
      >
        <thead>{this.renderTableHeader()}</thead>
        <tbody>{this.renderTableData()}</tbody>
      </table>
    );
  }

  renderTableData() {
    const { region } = this.props;
    const { teachers } = this.state; //destructuring
    return teachers.map((teacher, index) => {
      console.log(teacher.region);
      const {
        id,
        name,
        totalScore,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
      } = teacher;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <Link to={`/table/${region}/${name}`}>{name}</Link>
          </td>
          <td>{totalScore}</td>
          <td>{monday}</td>
          <td>{tuesday}</td>
          <td>{wednesday}</td>
          <td>{thursday}</td>
          <td>{friday}</td>
        </tr>
      );

      return null;
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.headers[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }
}

export default Teachers;
