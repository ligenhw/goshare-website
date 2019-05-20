import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import {getQueryStringByName} from '../../utils/url'
import { alipaySignIn } from '../../store/actions/user'
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

const loginUrl = "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019051864987632&scope=auth_user&redirect_uri=http%3a%2f%2fbestlang.cn%2flogin&state=alipay"

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
                 <img className={classes.icon} src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558343354960&di=7d5a7d0f39f3d1f03d48ff43d152c7fb&imgtype=0&src=http%3A%2F%2Fimg1.2345.com%2Fduoteimg%2FsoftImg%2Fsoft%2F1%2F1436404574_13.jpeg%3F1457612070"} alt='logo'/>
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