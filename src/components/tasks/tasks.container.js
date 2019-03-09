import { connect } from 'react-redux';

import Tasks from './tasks.component';
import {
  getTasks,
  toggleTask
} from '../../store/tasks';

const mapStateToProps = state => ({
  tasks: getTasks(state)
});

const mapDispatchToProps = {
  toggleTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
