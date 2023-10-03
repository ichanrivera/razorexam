import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TagsCard = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <h5>Tags</h5>
        <br/>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control placeholder="Enter tags" as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TagsCard;
