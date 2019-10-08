import React from "react";
import { arrayIncludes, addToArray, removeFromArray } from "../utils/utils";
// import data from "../data/data.json";

const DataContext = React.createContext();

export const DataConsumer = DataContext.Consumer;

export class DataProvider extends React.Component {
  state = {
    students: [
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
    ]
  };

  addStudent = student => {
    const newStudents = addToArray(this.state.students, student);
    this.setState({
      students: newStudents
    });
  };

  render() {
    const value = {
      addStudent: this.addStudent,
      students: this.state.students
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
