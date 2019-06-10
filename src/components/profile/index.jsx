import Profile from './Profile'
import { connect } from 'react-redux';

export default connect(state => ({
    user: state.user,
}))(Profile)