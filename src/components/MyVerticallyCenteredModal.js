import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import RegisterForm from './RegisterForm';
// import Form from './Form';

function MyVerticallyCenteredModal(props) {
  // console.log(props);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registration Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Fill the below details...</h4>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.register}>Submit</Button> */}
        <Button onClick={props.onHide} className="btn-danger">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
