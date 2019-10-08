import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Student from "../components/Student";
import ViewStudents from "../views/ViewStudents";
import { DataConsumer } from "../providers/DataContext";

class Add extends React.Component {
  state = {
    name: "",
    totalScore: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    students: []
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      totalScore,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday
    } = this.state;
    // add to the global list
    this.props.addStudent({
      name,
      totalScore,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday
    });

    // push new customer object into the customers list in state:
    this.setState(
      {
        students: [
          ...this.state.students,
          {
            name,
            totalScore,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday
          }
        ]
      },
      // blank out the inputs after state update completes:
      () => {
        this.setState({
          name: "",
          totalScore: 0,
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0
        });
      }
    );
  };

  render() {
    console.log(this.props.students);
    console.log(this.props.addStudent);
    const {
      name,
      totalScore,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday
    } = this.state;
    const { handleChange } = this;
    console.log(this.props);
    return (
      <div class="col-md-6">
        <Form onSubmit={this.handleSubmit}>
          <Label>Name</Label>
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Trainer name"
              value={name}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>TotalScore</Label>
          <FormGroup>
            <Input
              type="text"
              name="totalScore"
              id="totalScore"
              value={totalScore}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>EOC</Label>
          <FormGroup>
            <Input
              type="text"
              name="monday"
              id="monday"
              value={monday}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>ClassroomAudit</Label>
          <FormGroup>
            <Input
              type="text"
              name="tuesday"
              id="tuesday"
              value={tuesday}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>Compliance</Label>
          <FormGroup>
            <Input
              type="text"
              name="wednesday"
              id="wednesday"
              value={wednesday}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>KnowledgeAccuracy</Label>
          <FormGroup>
            <Input
              type="text"
              name="thursday"
              id="thursday"
              value={thursday}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <Label>CaseHandling</Label>
          <FormGroup>
            <Input
              type="text"
              name="friday"
              id="friday"
              value={friday}
              onChange={handleChange}
            ></Input>
          </FormGroup>

          <Input type="submit">Submit</Input>
        </Form>
        {this.state.students.map(student => {
          return (
            <>
              <p>The current information was added to the trainers list</p>
              <Student key={student.name} {...student} />
            </>
          );
        })}
      </div>
    );
  }
}
function AddWrapper(props) {
  return (
    <DataConsumer>
      {studentProps => <Add {...props} {...studentProps} />}
    </DataConsumer>
  );
}

export default AddWrapper;
// export default Add;
