import React from "react";
// import axios from "../../axios";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class UserImage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
      

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
           
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete="off" onSubmit={this.props.submitHandler}>
              
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button type="submit" onClick={this.handleClose}>
                  Save my changes
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default UserImage;
