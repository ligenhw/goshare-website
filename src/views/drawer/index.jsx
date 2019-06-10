import AppDrawer from './AppDrawer'
import { connect } from 'react-redux';

export default connect(state => ({
    user: state.user,
}))(AppDrawer)