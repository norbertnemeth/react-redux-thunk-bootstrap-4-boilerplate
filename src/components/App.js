import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const App = () => (
  <Container>
    <Row>
      <Col>
        <Alert variant="success">
          Hello Bootstrap 4!
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default App;
