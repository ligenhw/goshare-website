import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
})

const Layouts = (props) => {
    const { classes, children } = props

    return (
        <React.Fragment   >
            <PrimarySearchAppBar />
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

Layouts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layouts)