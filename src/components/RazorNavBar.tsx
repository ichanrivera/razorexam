import {
  Search,
  Bell,
  Gear,
  QuestionCircle,
  PersonCircle,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownNav from "./DropdownNav";
import logo from "../assets/razor-logo.jpg";

function RazorNavBar() {
  return (
    <Navbar data-bs-theme="dark" expand="xxl" className="bg-body-tertiary">
      <Navbar.Brand className="p-1" href="#home">
        <img
          src={logo}
          width="100%"
          height="30"
          className="d-inline-block align-top"
          alt="Razor Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <DropdownNav title="Dashboard" />
          <DropdownNav title="CRM" />
          <DropdownNav title="Inventory" />
          <DropdownNav title="Purchases" />
          <DropdownNav title="Sales" />
          <DropdownNav title="Recycling" />
          <DropdownNav title="Shredding" />
          <DropdownNav title="Finance" />
          <DropdownNav title="Reports" />
          <DropdownNav title="More" />
        </Nav>
      </Navbar.Collapse>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            <Search />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Bell />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Gear />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <QuestionCircle />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <PersonCircle />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default RazorNavBar;
