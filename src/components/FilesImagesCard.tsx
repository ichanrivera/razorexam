import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {
  FileEarmarkArrowDown
} from "react-bootstrap-icons";

const FilesImagesCard = () => {
  return (
    <Card className="m-2 ">
      <Card.Body>
        <h5>Files and Images</h5>
        <br />
        <Row>
          <Col>
            <Card className="file-upload-card">
              <Card.Header>
                <Nav fill variant="underline" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">Files</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                      Images
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="center">
                  <FileEarmarkArrowDown /> <b>Drag and drop</b> files here or browse
                  <br/>
                  <sub>.PDF, .docx, .xlsx are allowed. Max 10mb</sub>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FilesImagesCard;
