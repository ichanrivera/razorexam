import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AlternateContact from "./AlternateContact";
import PrimaryContact from "./PrimaryContact";

const GeneralCard = () => {
  const [isPrimaryFormVisible, setPrimaryFormVisible] = useState(false)
  const [isAlternateFormVisible, setAlternateFormVisible] = useState(false)


  return (
    <Card className="m-2">
      <Card.Body>
        <h5>General</h5>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>
                  Account Name <span className="red">*</span>
                </b>
              </Form.Label>
              <Form.Control type="text" placeholder="input text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Pick Up Location</b>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select location</option>
                <option value="1">
                  2381 Stark Hollow Road, Basalt, CO 81620
                </option>
                <option value="2">
                  1608 Philadelphia Avenue, Salt Lake City, UT, 84111
                </option>
                <option value="3">
                  4905 Alfred Drive, Brooklyn, NY, 11206
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Job Type</b>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Job Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Primary Contact</b>
              </Form.Label>
              <Form.Control type="text" placeholder="input text" />
            </Form.Group>
          </Col>
        </Row>
       
        {!isAlternateFormVisible && <Button onClick={() => setAlternateFormVisible(!isAlternateFormVisible)} className="mx-1" variant="outline-primary" size="sm">
          + Add Alternate Contact
        </Button>}
        {!isPrimaryFormVisible && <Button onClick={() => setPrimaryFormVisible(!isPrimaryFormVisible)} variant="outline-primary" size="sm">
          + Add Primary Contact
        </Button>}
        
        {isAlternateFormVisible &&  <AlternateContact closeForm={()=>setAlternateFormVisible(false)}/>}
        {isPrimaryFormVisible &&  <PrimaryContact closeForm={()=>setPrimaryFormVisible(false)}/>}
       
        
      </Card.Body>
    </Card>
  );
};

export default GeneralCard;
