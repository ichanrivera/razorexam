import React from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Trash } from "react-bootstrap-icons";

const PrimaryContact = ({ closeForm }:{closeForm: () => void}) => {
  return (
    <>
      <Row className="mt-3">
        <Col>
          <h5>Primary Contact</h5>
        </Col>
        <Col>
          <h5><Trash color="red" onClick={closeForm} className="float-end  pointer" /></h5>
        </Col>
      </Row>
      <Row>
        <Col xxl={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Company Name <span className="red">*</span></b>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Company</option>
                <option value="1">
                  Razor ERP
                </option>
                <option value="2">
                  Google
                </option>
                <option value="3">
                 Meta
                </option>
                <option value="4">
                 X
                </option>
              </Form.Select>
            </Form.Group>
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
  )
}

export default PrimaryContact