import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Tasks extends React.PureComponent {
  handleClick = () => {

  };

  render() {
    const { tasks } = this.props;
    console.log('tasks', tasks)
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
