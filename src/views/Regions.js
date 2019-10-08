import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import Teachers from "./Teachers";
import Students from "./Students";

class Regions extends React.Component {
  state = {
    regions: data,
    states: [
      {
        ID: 1,
        Site: "AZ",
        TotalScore: 85,
        EOC: 75,
        ClassroomAudit: 90,
        Compliance: 95,
        KnowledgeAccuracy: 70,
        CaseHandling: 80
      }
    ]
  };

  render() {
    return (
      <div>
        <h1 id="title">Monthly Report</h1>
        <table
          class="table table-dark table-hover table-striped  table-bordered"
          id="regions"
        >
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>

        {this.props.match.params.region ? (
          <Teachers region={this.props.match.params.region} />
        ) : null}
        {this.props.match.params.teacher ? (
          <Students
            teacher={this.props.match.params.teacher}
            region={this.props.match.params.region}
          />
        ) : null}
      </div>
    );
  }

  renderTableData() {
    const { regions } = this.state; //destructuring
    return regions.map((state, index) => {
      const {
        id,
        region,
        totalScore,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
      } = state;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <Link to={`/table/${region}`}>{region}</Link>
          </td>
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
      if (key !== "teachers") return <th key={index}>{key}</th>;
      return null;
    });
  }
}

export default Regions;
