import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppActionBar from "./AppActionBar";
import Typography from '@material-ui/core/Typography';
import AppDrawer from './AppDrawer'
import SimpleSnackbar from './SimpleSnackbar'
import Paper from '@material-ui/core/Paper';

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

    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            view: {
                name: '文章'
            }
        };
    }

    onDrawerClose = () => {
        this.setState({
            openDrawer: false,
        })
    }
    
    render() {
        const { classes, children, onThemeChanged } = this.props

        return (
            <React.Fragment>
                <AppActionBar
                 menuClick={() => this.setState({ openDrawer: true})}
                 onThemeChanged = {onThemeChanged}
                 view={this.state.view} />
                <AppDrawer open={this.state.openDrawer} onClose={this.onDrawerClose}/>
                <SimpleSnackbar />
                {children}
                {/* Footer */}
                <Paper className={classes.footer} >
                    <Typography variant="h6" align="center" gutterBottom color="inherit">
                       Built with ❤️ by gen
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="inherit" >
                    全栈分享 ©2019
                    </Typography>
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