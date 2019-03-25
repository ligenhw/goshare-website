import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppActionBar from "./AppActionBar";
import Typography from '@material-ui/core/Typography';
import AppDrawer from './AppDrawer'

const styles = theme => ({
    footer: {
        width: 'auto',
        margin: theme.spacing.unit * 3,
    },
})

class Layouts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            view: {
                name: 'index'
            }
        };
    }

    onDrawerClose = () => {
        this.setState({
            openDrawer: false,
        })
    }
    
    render() {
        const { classes, children } = this.props

        return (
            <React.Fragment>
                <AppActionBar
                 menuClick={() => this.setState({ openDrawer: true})}
                 view={this.state.view} />
                <AppDrawer open={this.state.openDrawer} onClose={this.onDrawerClose}/>
                {children}
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>
        )
    }
}

Layouts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layouts)