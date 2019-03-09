import { connect } from 'react-redux';

import Footer from './footer.component';
import { clearTasks } from '../../store/tasks';
import {
  changeFilter,
  getActiveFilter
} from '../../store/filter';

const mapStateToProps = state => ({
  activeFilter: getActiveFilter(state)
});

const mapDispatchToProps = {
  clearTasks,
  changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
