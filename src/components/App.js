import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';

import TaskInput from './task-input/task-input.component';
import Tasks from './tasks/tasks.component';
import icons from '../side-effects/font-awesome';

console.log(icons)

library.add(...icons);

const App = () => (
  <Container fluid>
    <Row className="mt-3 justify-content-center">
      <Col sm="6">
        <TaskInput />
      </Col>
    </Row>
    <Row className="mt-3 justify-content-center">
      <Col sm="6">
        <Tasks />
      </Col>
    </Row>
  </Container>
);

export default App;
