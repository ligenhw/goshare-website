import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import {getQueryStringByName} from '../../utils/url'

const styles = theme => ({
    title: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }
});

const loginUrl = "https://github.com/login/oauth/authorize?client_id=6f8ed9e6e9fc7b14cbc2&scope=user:email"

class GhLogin extends Component {

    componentWillMount() {
        const code = getQueryStringByName('code')
        console.log("back from gh")
        console.log(code)
    }

    render() {
        return (
            <Link color='primary' rel ="noopener"
             href={loginUrl}>github login</Link>
        )
    }
}

GhLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ article: state.article })

const mapDispatchToProps = {}

const GhLoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(GhLogin))

export default GhLoginContainer;