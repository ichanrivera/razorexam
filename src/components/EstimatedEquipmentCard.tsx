import React from 'react'
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const EstimatedEquipmentCard = () => {
  return (
    <Card className='m-2'>
      <Card.Body>
        <h5>Estimated Equipment</h5>
        <br />
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Pallet Count</b></Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select count</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Net Weight</b></Form.Label>
              <Form.Control type="text" placeholder="Enter weight" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default EstimatedEquipmentCard