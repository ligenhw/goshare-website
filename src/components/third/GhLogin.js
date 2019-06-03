import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { getQueryStringByName } from '../../utils/url'
import { ghSignIn } from '../../store/actions/user'
import GithubIcon from '../../assets/Github'

const styles = theme => ({
    title: {
        marginTop: theme.spacing(3),
    },
    icon: {
        height: '32px',
        width: '28px',
    },
    dark: {
        height: '32px',
        width: '28px',
        color: 'black',
    }
});

const loginUrl = "https://github.com/login/oauth/authorize?client_id=bb7525d0a2624d0d43f5&scope=user:email&state=gh"

class GhLogin extends Component {

    componentWillMount() {
        const code = getQueryStringByName('code')
        const state = getQueryStringByName('state')

        console.log('check ghlogin ', code, state)
        if (code !== '' && state === 'gh') {
            this.props.ghSignIn(code)
        }
    }

    render() {
        const { classes } = this.props

        return (
            <Link className={classes.title} color='primary' rel="noopener"
                href={loginUrl}>
                <GithubIcon className={classes.dark} />
            </Link>
        )
    }
}

GhLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = { ghSignIn }

const GhLoginContainer = connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(GhLogin))

export default GhLoginContainer;