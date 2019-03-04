import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tasks = [
  { label: 'Bread1', isDone: true },
  { label: 'Bread2', isDone: false },
  { label: 'Bread3', isDone: true }
];

export default class Tasks extends React.PureComponent {
  handleClick = () => {

  };

  render() {
    return (
      <ListGroup>
        {
          tasks.map((task, idx) => (
            <ListGroup.Item
              key={`${task.label}-${idx}`}
              className="cursor-pointer"
              variant={task.isDone ? 'success' : 'danger'}
            >
              {task.isDone
                ? <FontAwesomeIcon icon="check" className="fa-w-16 mr-2" />
                : <FontAwesomeIcon icon="times" className="fa-w-16 mr-2" />}
              {task.label}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    );
  }
}
