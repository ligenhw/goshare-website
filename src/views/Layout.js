import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppActionBar from "./AppActionBar";
import Typography from '@material-ui/core/Typography';
import AppDrawer from './AppDrawer'
import SimpleSnackbar from './SimpleSnackbar'
import Paper from '@material-ui/core/Paper';
import IPCLink from '../components/IPCLink';

const styles = theme => ({
    footer: {
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 10,
        width: 'auto',
        marginTop: theme.spacing.unit * 3,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[900],
    },
})

class Layouts extends React.Component {

    state = {
        openDrawer: false,
        title: '文章'
    }

    render() {
        const { classes, children, onThemeChanged } = this.props
        const buildBy = 'Built with ❤️ by gen'

        return (
            <React.Fragment>
                <AppActionBar
                    menuClick={() => this.setState({ openDrawer: true })}
                    onThemeChanged={onThemeChanged}
                    title={this.state.title} />
                <AppDrawer
                    open={this.state.openDrawer}
                    onClose={ () => this.setState({ openDrawer: false }) }
                    onMenuClick={ (title) => this.setState({ title })}
                />
                <SimpleSnackbar />
                {children}
                {/* Footer */}
                <Paper className={classes.footer} >
                    <Typography variant="h6" align="center" gutterBottom color="inherit">
                        {buildBy}
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom
                     color="inherit" >
                        全栈分享 ©2019
                    </Typography>
                    <IPCLink />
                </Paper>
                {/* End footer */}
            </React.Fragment>
        )
    }
}

Layouts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layouts)