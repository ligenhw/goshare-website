import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppActionBar from "./AppActionBar";
import Typography from '@material-ui/core/Typography';
import AppDrawer from './drawer'
import SimpleSnackbar from './SimpleSnackbar'
import Paper from '@material-ui/core/Paper';
import IPCLink from '../components/IPCLink';
import CdnLink from '../components/CdnLink'

const styles = theme => ({
    content: {
        minHeight: '80vh',
    },
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
        width: 'auto',
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
        const { classes, children } = this.props
        console.log('debug layout', this.props)
        const buildBy = 'Built with ❤️ by gen'

        return (
            <React.Fragment>
                <CssBaseline />
                <AppActionBar
                    menuClick={() => this.setState({ openDrawer: true })}
                    title={this.state.title} />
                <AppDrawer
                    open={this.state.openDrawer}
                    onClose={ () => this.setState({ openDrawer: false }) }
                    onMenuClick={ (title) => this.setState({ title })}
                />
                <SimpleSnackbar />
                <div className={classes.content}>
                    {children}
                </div>
                {/* Footer */}
                <Paper className={classes.footer} >
                    <Typography variant="h6" align="center" gutterBottom color="inherit">
                        {buildBy}
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom
                     color="inherit" >
                        goshare ©2019
                    </Typography>
                    <IPCLink />
                    <CdnLink />
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