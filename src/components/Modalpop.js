import React from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { Button } from 'react-bootstrap';
import { onAdd, onClose, searchText } from '../actions/personActions';
// import persons from '../reducers/persons';
import { connect } from 'react-redux';

function Modalpop(props) {
  return (
    <>
      <div className="center">
        <Button variant="primary" onClick={props.onAdd}>
          <i class="fas fa-user-plus"></i> Add Details
        </Button>
        <input
          className="input"
          type="text"
          placeholder="Search Here....."
          onChange={props.searchText}
        />
        <button className="edit" disabled="true">
          {/* {<i class="fas fa-search"></i>} */}
        </button>
      </div>

      <MyVerticallyCenteredModal
        show={props.show}
        onHide={props.onClose}
        // register={props.register}
      >
        {props.children}
      </MyVerticallyCenteredModal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    show: state.persons.show,
  };
};

export default connect(mapStateToProps, { onAdd, onClose, searchText })(
  Modalpop
);
