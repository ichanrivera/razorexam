import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Trash } from "react-bootstrap-icons";

const AlternateContact = ({ closeForm }:{closeForm: () => void}) => {
  return (
    <>
      <Row className="mt-3">
        <Col>
          <h5>Alternate Contact</h5>
        </Col>
        <Col>
          <h5><Trash color="red" onClick={closeForm} className="float-end pointer" /></h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>
                First Name <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control type="text" placeholder="input text" />
          </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>
                First Name <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control type="text" placeholder="input text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>
                Email <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control type="text" placeholder="input text" />
          </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>
                Phone <span className="red">*</span>
              </b>
            </Form.Label>
            <Form.Control type="text" placeholder="input text" />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default AlternateContact;
