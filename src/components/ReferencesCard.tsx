import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ReferencesCard = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <h5>References</h5>
        <br />
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>
                  BOL
                </b>
              </Form.Label>
              <Form.Control type="text" placeholder="input text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>
                  Reference 1
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
                  PO Number
                </b>
              </Form.Label>
              <Form.Control type="text" placeholder="input text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>
                  Reference 2
                </b>
              </Form.Label>
              <Form.Control type="text" placeholder="input text" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReferencesCard;
