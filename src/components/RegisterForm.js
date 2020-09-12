import React, { Component } from 'react';
// import { Form, FormGroup, Label, Input, Row } from 'reactstrap';
import '../App.css';

export default class RegisterForm extends Component {
  state = {
    persons: [
      {
        firstname: 'vijay',
        lastname: 'manikanta',
        age: 22,
        gender: 'Male',
      },
      {
        firstname: 'pavan',
        lastname: 'kumar',
        age: 22,
        gender: 'Male',
      },
      {
        firstname: 'praveen',
        lastname: 'kumar',
        age: 22,
        gender: 'Male',
      },
    ],
    data: {
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
    },
    errors: {
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
    },
    // email: '',
    currentId: '',
  };

  firstname = (e) => {
    this.setState({
      data: { ...this.state.data, firstname: e.target.value },
      errors: {
        ...this.state.errors,
        firstname: this.state.data.firstname == null || '' ? true : false,
      },
    });
  };
  lastname = (e) => {
    this.setState({
      data: { ...this.state.data, lastname: e.target.value },
      errors: {
        ...this.state.errors,
        lastname: this.state.data.lastname == null || '' ? true : false,
      },
    });
  };
  age = (e) => {
    this.setState({
      data: { ...this.state.data, age: e.target.value },
      errors: {
        ...this.state.errors,
        age: this.state.data.age == null || '' ? true : false,
      },
    });
  };
  gender = (e) => {
    this.setState({
      data: { ...this.state.data, gender: e.target.value },
      errors: {
        ...this.state.errors,
        gender: this.state.data.gender == null || '' ? true : false,
      },
    });
  };
  validate = () => {
    this.setState({
      errors: {
        firstname: !this.state.data.firstname != '',
        lastname: !this.state.data.lastname != '',
        age: !this.state.data.age != '',
        gender: !this.state.data.gender != '',
      },
    });
    return (
      this.state.data.firstname !== '' &&
      this.state.data.lastname !== '' &&
      this.state.data.age !== '' &&
      this.state.data.gender !== ''
    );
  };
  register = (e) => {
    e.preventDefault();
    if (!this.validate()) return;

    // const newPerson = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   age: this.state.age,
    //   gender: this.state.gender,
    // };
    if (this.state.currentId == '') {
      this.setState({
        persons: [...this.state.persons, this.state.data],
        data: { firstname: '', lastname: '', age: '', gender: '' },
      });
    } else {
      let persons = this.state.persons.map((person, i) =>
        i === Number(this.state.currentId) ? this.state.data : person
      );
      this.setState({
        persons,
        data: { firstname: '', lastname: '', age: '', gender: '' },
        // errors: { firstname: '', lastname: '', age: '', gender: '' },
        currentId: '',
      });
    }
  };
  edit = (e) => {
    e.preventDefault();
    this.setState({
      data: {
        firstname: this.state.persons.find(
          (person, i) => i === Number(e.target.id)
        ).firstname,
        lastname: this.state.persons.find(
          (person, i) => i === Number(e.target.id)
        ).lastname,
        age: this.state.persons.find((person, i) => i === Number(e.target.id))
          .age,
        gender: this.state.persons.find(
          (person, i) => i === Number(e.target.id)
        ).gender,
      },
      currentId: e.target.id,
    });
  };
  delete = (e) => {
    e.preventDefault();
    this.setState({
      persons: [
        ...this.state.persons.filter((person, i) => i !== Number(e.target.id)),
      ],
    });
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.errors);
    return (
      <form className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter First Name"
              value={this.state.data.firstname}
              onChange={this.firstname}
            />
            <div className="error">
              {this.state.errors.firstname ? 'Should not be blank' : ''}
            </div>
          </div>

          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter Last Name"
              value={this.state.data.lastname}
              onChange={this.lastname}
            />
            <div className="error">
              {this.state.errors.lastname ? 'Should not be blank' : ''}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter Age"
              value={this.state.data.age}
              onChange={this.age}
            />
            <div className="error">
              {this.state.errors.age ? 'Should not be blank' : ''}
            </div>{' '}
          </div>

          <div className="form-group col-md-6">
            {/* <label>Gender</label> */}
            <div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Gender
                  </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Male"
                        id="Male"
                        value="Male"
                        onClick={this.gender}
                        checked={this.state.data.gender === 'Male'}

                        // checked
                      />
                      <label className="form-check-label" for="gridRadios1">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Female"
                        id="Female"
                        value="Female"
                        onClick={this.gender}
                        checked={this.state.data.gender === 'Female'}
                      />
                      <label className="form-check-label" for="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="error">
                {this.state.errors.gender ? 'Should not be blank' : ''}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <button className="register" onClick={this.register}>
          Register
        </button>

        <table class="table table-bordered">
          <thead>
            <tr className="thead">
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              {/* <th scope="col">E-Mail</th> */}
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="center">
            {this.state.persons.map((person, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                {/* <td>{person.email}</td> */}
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>
                  <button className="edit" id={i} onClick={this.edit}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="delete" id={i} onClick={this.delete}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    );
  }
}
