import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ScheduleCard = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <h5>Schedule</h5>
        <br />
        <Row>
          <Col>Date</Col>
          <Col>Time</Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Start Date <span className="red">*</span></b>
              </Form.Label>
              <Form.Control type="date" placeholder="input text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Start Time <span className="red">*</span></b>
              </Form.Label>
              <Form.Control type="time" placeholder="input text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>End Date <span className="red">*</span></b>
              </Form.Label>
              <Form.Control type="date" placeholder="input text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>End Time <span className="red">*</span></b>
              </Form.Label>
              <Form.Control type="time" placeholder="input text" />
            </Form.Group>
          </Col>
        </Row>
        <Button className="mx-1" variant="outline-secondary" size="sm">Check Calendars</Button>
        <Button variant="outline-danger" size="sm">Clear Dates</Button>
        {/* <Divider /> */}
        <hr/>
        <Row>
          <Col><b>Member & Resources</b></Col>
        </Row>
        <br />
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Team Members</b></Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">2381 Stark Hollow Road, Basalt, CO 81620</option>
                <option value="2">1608 Philadelphia Avenue, Salt Lake City, UT, 84111</option>
                <option value="3">4905 Alfred Drive, Brooklyn, NY, 11206</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Truck Resources</b></Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">2381 Stark Hollow Road, Basalt, CO 81620</option>
                <option value="2">1608 Philadelphia Avenue, Salt Lake City, UT, 84111</option>
                <option value="3">4905 Alfred Drive, Brooklyn, NY, 11206</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ScheduleCard;
