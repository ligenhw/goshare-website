import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Markdown from '../markdown/Markdown'
import md from './about.md'

const styles = theme => ({
    content: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: theme.primary
        },
    },
});

class About extends Component {

    state = {
        data: ''
    }

    componentWillMount() {
        fetch(md)
            .then(res => res.text())
            .then(text => this.setState({ data: text }));
    }

    render() {
        const { classes } = this.props
        const { data } = this.state

        return (
            <div className={classes.content}>
                <CssBaseline />
                <p className={classes.title}></p>
                <Typography variant="h3" align="center">
                    关于
                </Typography>
                { data ? 
                <Markdown className={classes.markdown}
                    markdown={data}>
                </Markdown> : ''}
            </div>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About)