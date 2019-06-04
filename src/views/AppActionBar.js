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
import GithubIcon from '../assets/Github'
import { THEME_CHANGE } from '../store/types'
import LightbulbOutlineIcon from '../assets/LightbulbOutline';
import LightbulbFullIcon from '../assets/LightbulbFull';

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
  }
};

class ButtonAppBar extends Component {

  componentWillMount() {
    console.log('ButtonAppBar')
    this.props.dispatch(getUser)
  }

  handleTogglePaletteType = () => {
    const paletteType = this.props.reduxTheme.paletteType === 'light' ? 'dark' : 'light';
    document.cookie = `paletteType=${paletteType};path=/;max-age=31536000`;

    this.props.dispatch({
      type: THEME_CHANGE,
      payload: {
        paletteType,
      },
    });
  };

  render() {
    const { classes, title, menuClick, user, reduxTheme, dispatch } = this.props;

    const renderSign = classes => (
      <React.Fragment>
        <Link color='inherit' className={classes.button} component={RouterLink} to={'/signup'}>注册</Link>
        <Link color='inherit' className={classes.button} component={RouterLink} to={'/login'}>登录</Link>
      </React.Fragment>
    )

    const renderUser = () => (
      <React.Fragment>
        <IconButton
          color="inherit"
          onClick={this.handleTogglePaletteType}
          aria-label={'toggleTheme'}
          data-ga-event-category="AppBar"
          data-ga-event-action="dark"
        >
          {reduxTheme.paletteType === 'light' ? (
            <LightbulbOutlineIcon />
          ) : (
              <LightbulbFullIcon />
            )}
        </IconButton>
        <Typography variant="h6" color="inherit" >
          {user.username}
        </Typography>
        <Button color="inherit" onClick={() => {
          history.push('/editor')
        }}>
          写文章
      </Button>
        <Button color="inherit" onClick={() => dispatch(logout)}>
          登出
      </Button>
      </React.Fragment>
    )

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar className={classes.content}>
            <IconButton onClick={menuClick}
              className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {title}
            </Typography>
            {
              user === null ? renderSign(classes) : renderUser()
            }
            <IconButton
              edge="end"
              component="a"
              color="inherit"
              href="https://github.com/ligenhw/goshare-website"
              aria-label='github'
              data-ga-event-category="AppBar"
              data-ga-event-action="github"
            >
              <GithubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  user: state.user,
  reduxTheme: state.theme,
})

const ButtonAppBarContainer = connect(
  mapStateToProps
)(withStyles(styles)(ButtonAppBar))

export default ButtonAppBarContainer;