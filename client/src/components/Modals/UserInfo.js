import React from "react";
// import axios from "../../axios";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class UserInfo extends React.Component {
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
    const { name, email, age, mobile, dob, gender } = this.props.userInfo;

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Update my info
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete="off" onSubmit={this.props.submitHandler}>
              {/* //! name */}
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.props.changeHandler}
                  />
                </Col>
              </Form.Group>
              {/* //! email */}
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.props.changeHandler}
                  />
                </Col>
                </Form.Group>
                
                

                <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Gender
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={this.props.changeHandler}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Mobile
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={this.props.changeHandler}
                  />
                </Col>
              </Form.Group>

              {/* <TextField
                      name="dob"
                      type="date"
                      variant="outlined"
                      required
                      fullWidth
                      defaultValue="2021/02/12"
                      id="date"
                      className={classes.textField}
                      label="Date Of Birth"
                      autoFocus
                      onChange={(e) => setDob(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> */}

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  DOB
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="date"
                    name="dob"
                    id="date"
                    
                    value={dob}
                    onChange={this.props.changeHandler}
                  />
                </Col>
              </Form.Group>
              
              
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
export default UserInfo;
