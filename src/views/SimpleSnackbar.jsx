import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import { removeMsg } from '../store/actions/msg'

const styles = theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
});

class SimpleSnackbar extends React.Component {

  render() {
    const { msg, removeMsg } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={msg !== null}
          autoHideDuration={1500}
          onClose={(e) => removeMsg()}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{msg}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              OK
            </Button>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ msg: state.msg })

const mapDispatchToProps = { removeMsg }

const SimpleSnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SimpleSnackbar))

export default SimpleSnackbarContainer;

