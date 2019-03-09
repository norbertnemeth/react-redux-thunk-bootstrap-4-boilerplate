import { connect } from 'react-redux';

import Tasks from './tasks.component';
import {
  getTasks,
  toggleTask
} from '../../store/tasks';
import {
  getActiveFilter
} from '../../store/filter';

const mapStateToProps = state => ({
  tasks: getTasks(state),
  activeFilter: getActiveFilter(state)
});

const mapDispatchToProps = {
  toggleTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
