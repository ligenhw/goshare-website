import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import {getQueryStringByName} from '../../utils/url'
import { alipaySignIn } from '../../store/actions/user'
import alipaypng from '../../assets/alipay.png'

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit * 3,
    },
    icon: {
        height: '32px',
        width: '28px',
    }
});

const loginUrl = "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019051864987632&scope=auth_user&redirect_uri=https%3a%2f%2fwww.bestlang.cn%2flogin&state=alipay"

class AlipayLogin extends Component {

    componentWillMount() {
        const code = getQueryStringByName('auth_code')
        const state = getQueryStringByName('state')
        
        console.log('check alipaylogin ', code, state)
        if (code !== '' && state === 'alipay') {
            this.props.alipaySignIn(code)
        }
    }

    render() {
        const {classes} = this.props

        return (
            <Link className={classes.title} color='primary' 
             href={loginUrl}>
                 <img className={classes.icon} src={alipaypng} alt='logo'/>
            </Link>
        )
    }
}

AlipayLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = { alipaySignIn }

const AlipayContainer = connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(AlipayLogin))

export default AlipayContainer;