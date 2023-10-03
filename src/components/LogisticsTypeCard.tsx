import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Truck, TruckFlatbed, Box } from "react-bootstrap-icons";

const LogisticsTypeCard = () => {
  const [selectedCard, setselectedCard] = useState(1);

  const handleCardClick = (id: number) => {
    setselectedCard(id);
  };

  return (
    <Card className="m-2">
      <Card.Body>
        <h5>
          Select Logistic Type <span className="red">*</span>
        </h5>
        <br />
        <Row>
          <Col>
            <Card
              onClick={() => handleCardClick(1)}
              className="text-center delivery-choice-card"
              bg={selectedCard === 1 ? "primary" : undefined}
              text={selectedCard === 1 ? "white" : undefined}
            >
              <Card.Body>
                <Card.Title>
                  <Truck />
                </Card.Title>
                <Card.Text>
                  <b>Our Trucking</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card 
             onClick={() => handleCardClick(2)}
             className="text-center delivery-choice-card"
             bg={ selectedCard === 2 ? "primary" : undefined}
             text={ selectedCard === 2 ? "white" : undefined}
            >
              <Card.Body>
                <Card.Title>
                  <TruckFlatbed />
                </Card.Title>
                <Card.Text>
                  <b>Common Courier</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card 
              onClick={() => handleCardClick(3)}
              className="text-center delivery-choice-card"
              bg={ selectedCard === 3 ? "primary" : undefined}
              text={ selectedCard === 3 ? "white" : undefined}
            >
              <Card.Body>
                <Card.Title>
                  <Box />
                </Card.Title>
                <Card.Text>
                  <b>Client Drop Off</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LogisticsTypeCard;
