import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deletePerson, editPerson } from '../actions/personActions';
import Pagination from './Pagination';

class PersonList extends Component {
  state = {
    // firstname: '',
    // lastname: '',
    // age: '',
    // gender: '',
    currentSortCol: '',
    currentSortOrder: '',
    currentPage: 1,
    personsPerPage: 3,
  };

  getdata = () => {
    return this.props.persons.filter((person) => {
      console.log(person);
      return (
        person.firstname
          .toLocaleLowerCase()
          .includes(this.props.searchText.toLowerCase()) ||
        person.lastname
          .toLocaleLowerCase()
          .includes(this.props.searchText.toLowerCase()) ||
        person.gender
          .toLocaleLowerCase()
          .includes(this.props.searchText.toLowerCase()) ||
        person.age.toString().includes(this.props.searchText.toLowerCase())
      );
    });
  };

  onClickHandler = (e) => {
    let sortOrder =
      this.state.currentSortCol !== e.target.title
        ? ''
        : this.state.currentSortOrder;

    this.setState({
      currentSortCol: e.target.title,
      currentSortOrder: sortOrder === 'asc' ? 'dec' : 'asc',
    });
  };

  getSortedData = () => {
    const { currentSortCol, currentSortOrder } = this.state;
    return currentSortCol
      ? this.getdata().sort((a, b) =>
          currentSortOrder === 'asc' ? this.sort(a, b) : this.sort(b, a)
        )
      : this.getdata();
  };

  sort = (a, b) =>
    (a[this.state.currentSortCol] + '').localeCompare(
      b[this.state.currentSortCol] + ''
    );
  //*************************************************************** */
  deletePerson = (e) => {
    e.preventDefault();
    this.props.deletePerson(e.target.id);
  };

  edit = (e) => {
    e.preventDefault();
    this.props.editPerson(e.target.id);
  };

  firstPage = () => {
    this.state.currentPage > 1 && this.setState({ currentPage: 1 });
  };

  prevPage = () => {
    this.state.currentPage > 1 &&
      this.setState({ currentPage: this.state.currentPage - 1 });
  };
  pagination = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    //PAGINATION
    const { currentPage, personsPerPage } = this.state;
    const indexOfLastPerson = currentPage * personsPerPage;
    const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
    const currentPersons = this.getSortedData().slice(
      indexOfFirstPerson,
      indexOfLastPerson
    );
    const totalPages = Math.ceil(this.getSortedData().length / personsPerPage);
    const nextPage = () => {
      this.state.currentPage < totalPages &&
        this.setState({ currentPage: this.state.currentPage + 1 });
    };
    const lastPage = () => {
      this.state.currentPage < totalPages &&
        this.setState({ currentPage: totalPages });
    };

    // console.log(this.props.persons);
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr className="thead">
              <th scope="col">#</th>
              <th scope="col" title="firstname" onClick={this.onClickHandler}>
                First Name {/* <Button> */}
                <div className="sort">
                  <Button
                    className={
                      (this.state.currentSortCol === 'firstname' &&
                      this.state.currentSortOrder === 'asc'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▲
                  </Button>
                  <Button
                    className={
                      (this.state.currentSortCol === 'firstname' &&
                      this.state.currentSortOrder === 'dec'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▼
                  </Button>
                </div>
                {/* </Button> */}
              </th>
              <th scope="col" title="lastname" onClick={this.onClickHandler}>
                Last Name
                <div className="sort">
                  <Button
                    className={
                      (this.state.currentSortCol === 'lastname' &&
                      this.state.currentSortOrder === 'asc'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▲
                  </Button>
                  <Button
                    className={
                      (this.state.currentSortCol === 'lastname' &&
                      this.state.currentSortOrder === 'dec'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▼
                  </Button>
                </div>
              </th>
              {/* <th scope="col">E-Mail</th> */}
              <th scope="col" title="age" onClick={this.onClickHandler}>
                Age{' '}
                <div className="sort">
                  <Button
                    className={
                      (this.state.currentSortCol === 'age' &&
                      this.state.currentSortOrder === 'asc'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▲
                  </Button>
                  <Button
                    className={
                      (this.state.currentSortCol === 'age' &&
                      this.state.currentSortOrder === 'dec'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▼
                  </Button>
                </div>
              </th>
              <th scope="col" title="gender" onClick={this.onClickHandler}>
                Gender{' '}
                <div className="sort">
                  <Button
                    className={
                      (this.state.currentSortCol === 'gender' &&
                      this.state.currentSortOrder === 'asc'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▲
                  </Button>
                  <Button
                    className={
                      (this.state.currentSortCol === 'gender' &&
                      this.state.currentSortOrder === 'dec'
                        ? 'active'
                        : '') + ' sortb'
                    }
                  >
                    ▼
                  </Button>
                </div>
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="center">
            {currentPersons.map((person, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                {/* <td>{person.email}</td> */}
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>
                  <button className="edit">
                    <i
                      id={person._id}
                      onClick={this.edit}
                      className="fas fa-user-edit"
                    ></i>
                  </button>
                </td>
                <td>
                  <button className="delete">
                    <i
                      onClick={this.deletePerson}
                      className="fas fa-trash-alt"
                      id={person._id}
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center container position">
          <Button
            className="btn1"
            variant="link"
            onClick={this.firstPage}
            disabled={currentPage == 1 && true}
          >
            <i class="fas fa-angle-double-left"></i>
          </Button>
          <Button
            className="btn1"
            variant="link"
            onClick={this.prevPage}
            disabled={currentPage == 1 && true}
          >
            <i class="fas fa-angle-left"></i>
          </Button>
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={totalPages}
            pagination={this.pagination}
          />
          <Button
            className="btn1"
            variant="link"
            onClick={nextPage}
            disabled={(currentPage == totalPages && true) || totalPages == 0}
          >
            <i class="fas fa-angle-right"></i>
          </Button>
          <Button
            className="btn1"
            variant="link"
            onClick={lastPage}
            disabled={(currentPage == totalPages && true) || totalPages == 0}
          >
            <i class="fas fa-angle-double-right"></i>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ persons }) => {
  return {
    persons: persons.data,
    searchText: persons.searchText,
  };
};

export default connect(mapStateToProps, { deletePerson, editPerson })(
  PersonList
);
