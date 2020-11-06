import React, { Component } from 'react';
// import { Form, FormGroup, Label, Input, Row } from 'reactstrap';
import '../App.css';
import Modalpop from './Modalpop';
import PersonList from './PersonList';
import Form from './Form';
import { connect } from 'react-redux';
import { fetchPersons } from '../actions/personActions';

class RegisterForm extends Component {
  state = {
    // persons: [
    //   {
    //     firstname: 'a',
    //     lastname: 'manikanta',
    //     age: 22,
    //     gender: 'Male',
    //   },
    //   {
    //     firstname: 'b',
    //     lastname: 'kumar',
    //     age: 35,
    //     gender: 'Female',
    //   },
    //   {
    //     firstname: 'c',
    //     lastname: 'naidu',
    //     age: 30,
    //     gender: 'Male',
    //   },
    // ],
    // currentId: -1,
    // show: '',
    searchText: '',
    status: 'assending',
  };

  componentDidMount() {
    this.props.fetchPersons();
  }

  // validate = () => {
  //   this.setState({
  //     errors: {
  //       firstname: !this.state.data.firstname != '',
  //       lastname: !this.state.data.lastname != '',
  //       age: !this.state.data.age != '',
  //       gender: !this.state.data.gender != '',
  //     },
  //   });
  //   return (
  //     this.state.data.firstname !== '' &&
  //     this.state.data.lastname !== '' &&
  //     this.state.data.age !== '' &&
  //     this.state.data.gender !== ''
  //   );
  // };
  // register = (data) => {
  //   this.props.register(data);
  //   if (this.state.currentId === -1) {
  //     this.setState({ persons: [...this.state.persons, data], show: false });
  //   } else {
  //     let newPersons = this.state.persons.map((person, i) => {
  //       if (i == Number(this.state.currentId)) {
  //         // console.log('test98');
  //         return data;
  //       }
  //       return person;
  //     });
  //     this.setState({ show: false, currentId: -1, persons: newPersons });
  //   }
  //   // console.log(data);
  // };

  // showToogle = () => {
  //   this.state.show
  //     ? this.setState({ show: false })
  //     : this.setState({ show: true });
  // };

  // edit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     data: {
  //       firstname: this.state.persons.find(
  //         (person, i) => i === Number(e.target.id)
  //       ).firstname,
  //       lastname: this.state.persons.find(
  //         (person, i) => i === Number(e.target.id)
  //       ).lastname,
  //       age: this.state.persons.find((person, i) => i === Number(e.target.id))
  //         .age,
  //       gender: this.state.persons.find(
  //         (person, i) => i === Number(e.target.id)
  //       ).gender,
  //     },
  //     currentId: e.target.id,
  //   });
  // };

  // edit = (e) => {
  //   e.preventDefault();
  //   this.setState({ show: true, currentId: Number(e.target.id) });
  // };
  // delete = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     persons: [
  //       ...this.state.persons.filter((person, i) => i !== Number(e.target.id)),
  //     ],
  //   });
  // };

  // onAdd = (e) => {
  //   e.preventDefault();
  //   this.setState({ show: true });
  // };

  // onClose = () => {
  //   this.setState({ show: false, currentId: -1 });
  // };

  onSearch = (e) => {
    this.setState({ searchText: e.target.value });
    this.getdata();
  };

  // getdata = () => {
  //   return this.state.persons.filter(
  //     (person) =>
  //       person.firstname
  //         .toLocaleLowerCase()
  //         .includes(this.state.searchText.toLowerCase()) ||
  //       person.lastname
  //         .toLocaleLowerCase()
  //         .includes(this.state.searchText.toLowerCase()) ||
  //       person.gender
  //         .toLocaleLowerCase()
  //         .includes(this.state.searchText.toLowerCase()) ||
  //       person.age.toString().includes(this.state.searchText.toLowerCase())
  //   );
  // };

  // onSortAge = () => {
  //   console.log('age');
  //   this.state.statusAge === ''
  //     ? this.setState({
  //         persons: this.state.persons.sort((a, b) => b.age - a.age),
  //         statusAge: 'reverse',
  //       })
  //     : this.setState({
  //         persons: this.state.persons.sort((a, b) => a.age - b.age),
  //         statusAge: '',
  //       });
  // };

  // this.state.status === 'assending'
  //   ? this.setState({
  //       persons: this.state.persons.sort((a, b) =>
  //         (b[e.target.title] + '').localeCompare(a[e.target.title] + '')
  //       ),
  //       status: 'desending',
  //     })
  //   : this.setState({
  //       persons: this.state.persons.sort((a, b) =>
  //         (a[e.target.title] + '').localeCompare(b[e.target.title] + '')
  //       ),
  //       status: 'assending',
  //     });

  render() {
    // console.log(this.props.persons);
    return (
      <form className="container">
        <div>
          <h1 className="center">Data Entry Details</h1>
          <Modalpop
          // onAdd={this.onAdd}
          // onClose={this.onClose}
          // show={this.state.show}
          // onSearch={this.onSearch}
          >
            <Form
            // register={this.register}
            // showToogle={this.showToogle}
            // persons={this.state.persons}
            // currentId={this.state.currentId}
            />
          </Modalpop>
        </div>
        <PersonList
          // edit={this.edit}
          // delete={this.delete}
          // getdata={this.getdata}
          // onSortAge={this.onSortAge}
          // onSort={this.onSort}
          status={this.state.status}
          searchText={this.state.searchText}
        />
      </form>
    );
  }
}

export default connect(null, { fetchPersons })(RegisterForm);
