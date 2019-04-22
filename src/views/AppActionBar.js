import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logout, getUser } from '../store/actions/user'
import { history } from '../store/configureStore'
import InvertColors from '@material-ui/icons/InvertColors'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
};

class ButtonAppBar extends Component {

  componentWillMount() {
    this.props.getUser()
  }

  render() {
    const { classes, view, menuClick, user, logout, onThemeChanged } = this.props;

    const renderSign = classes => (
      <React.Fragment>
        <Link color='inherit' className={classes.button} component={RouterLink} to={'/signup'}>注册</Link>
        <Link color='inherit' className={classes.button} component={RouterLink} to={'/login'}>登录</Link>
      </React.Fragment>
    )

    const renderUser = () => (
      <React.Fragment>
        <IconButton onClick={onThemeChanged}>
          <InvertColors />
        </IconButton>
        <Typography variant="h6" color="inherit" >
          {user.username}
        </Typography>
        <Button color="inherit" onClick={() => {
          history.push('/editor')
        }}>
          写文章
      </Button>
        <Button color="inherit" onClick={logout}>
          登出
      </Button>
      </React.Fragment>
    )

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={menuClick}
              className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {view.name}
            </Typography>
            {
              user === null ? renderSign(classes) : renderUser()
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = { logout, getUser }

const ButtonAppBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ButtonAppBar))

export default ButtonAppBarContainer;