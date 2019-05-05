import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import {getQueryStringByName} from '../../utils/url'
import {ghSignIn} from '../../store/actions/user'

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit * 3,
    }
});

const loginUrl = "https://github.com/login/oauth/authorize?client_id=bb7525d0a2624d0d43f5&scope=user:email"

class GhLogin extends Component {

    componentWillMount() {
        const code = getQueryStringByName('code')
        console.log("back from gh")
        console.log(code)
        if (code !== '') {
            this.props.ghSignIn(code)
        }
    }

    render() {
        const {classes} = this.props

        return (
            <Link className={classes.title}  color='primary' rel ="noopener"
             href={loginUrl}>github login</Link>
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