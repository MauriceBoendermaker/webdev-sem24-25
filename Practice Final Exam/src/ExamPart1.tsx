import * as React from "react";

export type Person = Student | Teacher | Staff;

type Student = {
  id: string,
  name: string;
  grade: number;
  role: "student";
};

type Teacher = {
  id: string,
  name: string;
  subject: string;
  role: "teacher";
};

type Staff = {
  id: string,
  name: string;
  department: string;
  role: "staff";
};


// Question 1

export const PersonCard = (props: Person): JSX.Element => (
  <>
    <div>
      {props.role == "student" ? "🎓 " : props.role == "teacher" ? "🏫 " : props.role == "staff" ? "🏢 " : ""}
      {props.name}&nbsp;|&nbsp;
      {props.role == "student" ? props.grade : props.role == "teacher" ? props.subject : props.role == "staff" ? props.department : ""}
    </div>
  </>
)


interface PersonState {
  id: string,
  name: string,
  grade: number,
  subject: string,
  department: string,
  role: string
}

// Question 2

export class PersonForm extends React.Component<{}, PersonState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: "",
      name: "Henk",
      grade: 0,
      subject: "",
      department: "",
      role: "student"
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  }

  handleInputChangeStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ grade: +e.target.value });
  }

  handleInputChangeTeacher = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ subject: e.target.value });
  }

  handleInputChangeStaff = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ department: e.target.value });
  }

  handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ role: e.target.value });
  }
  
  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault;
    this.state.role == "student" ?
    alert(this.state.name + " | " + this.state.grade + " | " + this.state.role) : "";

    this.state.role == "teacher" ?
    alert(this.state.name + " | " + this.state.subject + " | " + this.state.role) : "";

    this.state.role == "staff" ?
    alert(this.state.name + " | " + this.state.department + " | " + this.state.role) : "";
  }

  render(): JSX.Element {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          <select value={this.state.role} onChange={this.handleDropdownChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="staff">Staff</option>
          </select>

          {this.state.role == "student" ?
            <div>
              <label>Student grade: </label>
              <input type="number" value={this.state.grade} onChange={this.handleInputChangeStudent} />
            </div> : ""}

          {this.state.role == "teacher" ?
            <div>
              <label>Teacher subjects: </label>
              <input type="text" value={this.state.subject} onChange={this.handleInputChangeTeacher} />
            </div> : ""}

          {this.state.role == "staff" ?
            <div>
              <label>Staff department: </label>
              <input type="text" value={this.state.department} onChange={this.handleInputChangeStaff} />
            </div> : ""}

            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

/*
Hint for the Dropdown list 
<select 
    onChange={}
>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
    <option value="staff">Staff</option>
</select>
*/


// Question 3

export const fetchPersons = async (): Promise<{}> => {
  return {}
}


// Question 4

export class PersonList extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)

  }

  render(): JSX.Element {
    return (
      <div></div>
    )
  }
}


//DO  NOT IMPLEMENT QUESTION 5 HERE!!!
//Use the *.ts file to provide the answers. 


