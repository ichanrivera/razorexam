import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CaretLeftFill } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

const PageHeader = () => {
  return (
    <Container fluid className="mt-3 mb-2">
      <Row>
        <Col xs={1} xl={1} xxl={9}>
          <h3>
            <Button variant="outline-secondary">
              <CaretLeftFill />
            </Button>{" "}
            Create Inbound Order
          </h3>
        </Col>
        <Col className="float-right" xs={1} xl={1} xxl={3}>
          <Nav defaultActiveKey="/home">
            <Nav.Item className="separate">
              <Nav.Link href="/home"><Button variant="outline-secondary">To Dispatch</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  Actions {" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#3">
              <Button variant="primary">Create Order</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default PageHeader;
