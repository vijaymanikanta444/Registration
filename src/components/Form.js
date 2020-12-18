import React, { Component } from 'react';
// import { Form, FormGroup, Label, Input, Row } from 'reactstrap';
import '../App.css';
import { register, onClose } from '../actions/personActions';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    data:
      this.props.currentId !== -1
        ? this.props.persons.find(
            (person) => person._id == this.props.currentId
          )
        : {
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
    // currentId: '',
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
        firstname: this.state.data.firstname == '',
        lastname: this.state.data.lastname == '',
        age: this.state.data.age == '',
        gender: this.state.data.gender == '',
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
    // this.props.register();
    if (!this.validate()) return;

    // const newPerson = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   age: this.state.age,
    //   gender: this.state.gender,
    // };
    this.props.register(this.state.data);
    this.setState({
      data: { firstname: '', lastname: '', age: '', gender: '' },
    });
    this.props.onClose();
  };

  render() {
    // console.log(this.state.data);
    // console.log(this.state.errors);
    // console.log(this.props.currentId);
    return (
      <form>
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

        {/* <button className="register" onClick={this.register}>
          Register
        </button> */}
        <button className="register" onClick={this.register}>
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ persons }) => {
  return {
    persons: persons.data,
    currentId: persons.currentId,
    show: persons.show,
  };
};

export default connect(mapStateToProps, { register, onClose })(Form);
