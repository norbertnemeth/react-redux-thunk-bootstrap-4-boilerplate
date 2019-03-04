import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class TaskInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = value => this.setState({ value });

  handleAdd = e => {
    const { value } = this.state;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log(value);
  }

  render() {
    const { value } = this.state;

    return (
      <Form onSubmit={e => this.handleAdd(e)}>
        <Form.Group as={Row}>
          <Col sm="10">
            <Form.Control
              value={value}
              onChange={e => this.handleChange(e.target.value)}
              placeholder="My new task"
              required
            />
          </Col>
          <Col sm="2">
            <Button
              className="w-100"
              variant="outline-primary"
              type="submit"
              onClick={() => this.handleAdd()}
            >
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}
