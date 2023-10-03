import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const PageTabs = () => {
  return (
    <Container fluid className="border-top-grey">
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#2" disabled>
            Order Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#3" disabled>
            Estimate
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#4" disabled>
            Invoices
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#5" disabled>
            Time Sheets
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#6" disabled>
            Reporting
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#7" disabled>
            Asset Purchase
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#8" disabled>
            Notifications
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#8" disabled>
            Activity
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default PageTabs;
