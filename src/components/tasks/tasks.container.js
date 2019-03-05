import { connect } from 'react-redux';

import Tasks from './tasks.component';
import { getTasks } from '../../store/tasks';

const mapStateToProps = state => ({
  tasks: getTasks(state)
});

export default connect(mapStateToProps)(Tasks);
