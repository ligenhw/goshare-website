import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import {getQueryStringByName} from '../../utils/url'
import {qqSignIn} from '../../store/actions/user'
import qqpng from '../../assets/qq.png'

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit * 3,
    },
    icon: {
        height: '32px',
        width: '28px',
    }
});

const loginUrl = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101576375&redirect_uri=http%3a%2f%2fbestlang.cn%2flogin&state=qq"

class QQLogin extends Component {

    componentWillMount() {
        const code = getQueryStringByName('code')
        const state = getQueryStringByName('state')
        
        console.log('check qqlogin ', code, state)
        if (code !== '' && state === 'qq') {
            this.props.qqSignIn(code)
        }
    }

    render() {
        const {classes} = this.props

        return (
            <Link className={classes.title} color='primary' 
             href={loginUrl}>
                 <img className={classes.icon} src={qqpng} alt='logo'/>
            </Link>
        )
    }
}

QQLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = { qqSignIn }

const QQLoginContainer = connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(QQLogin))

export default QQLoginContainer;