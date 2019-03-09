import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import filterTypes from '../../constants/filterTypes';

export default ({ clearTasks, changeFilter, activeFilter }) => (
  <Row>
    <Col sm={6}>
      <ButtonToolbar>
        <Button
          variant="link"
          className={activeFilter === filterTypes.ALL ? 'font-weight-bold' : ''}
          onClick={() => changeFilter(filterTypes.ALL)}
        >
          All
        </Button>
        <Button
          variant="link"
          className={activeFilter === filterTypes.CLOSED ? 'font-weight-bold' : ''}
          onClick={() => changeFilter(filterTypes.CLOSED)}
        >
          Closed
        </Button>
        <Button
          variant="link"
          className={activeFilter === filterTypes.OPENED ? 'font-weight-bold' : ''}
          onClick={() => changeFilter(filterTypes.OPENED)}
        >
          Opened
        </Button>
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
