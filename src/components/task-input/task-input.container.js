import { connect } from 'react-redux';

import TaskInput from './task-input.component';
import { addTask } from '../../store/tasks';

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(TaskInput);
