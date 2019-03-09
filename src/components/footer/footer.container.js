import { connect } from 'react-redux';

import Footer from './footer.component';
import { clearTasks } from '../../store/tasks';

const mapDispatchToProps = {
  clearTasks
};

export default connect(null, mapDispatchToProps)(Footer);
