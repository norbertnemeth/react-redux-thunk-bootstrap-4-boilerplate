import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default ({ clearTasks }) => (
  <Row>
    <Col sm={6}>
      <ButtonToolbar>
        <Button variant="link">All</Button>
        <Button variant="link">Closed</Button>
        <Button variant="link">Opened</Button>
      </ButtonToolbar>
    </Col>
    <Col className="d-flex" sm={6}>
      <ButtonToolbar className="ml-auto">
        <Button
          variant="outline-secondary"
          onClick={() => clearTasks()}
        >
          Clear
        </Button>
      </ButtonToolbar>
    </Col>
  </Row>
);
