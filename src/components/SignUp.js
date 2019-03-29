import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/user'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends Component {

  state = {
    user: {
      username: '',
      password: '',
    }
  }

  onChange = label => event => {
    this.setState({
      user: {
        ...this.state.user,
        [label]: event.target.value
      }
    })
  }

  render() {
    const { classes, signUp } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            注册
        </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">用户名</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.onChange('username')} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">密码</InputLabel>
              <Input name="password" type="password" id="password" onChange={this.onChange('password')} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">确认密码</InputLabel>
              <Input name="password" type="password" id="passwordConfirm" autoComplete="current-password" />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={event => {
                event.preventDefault()
                signUp(this.state.user)
              }}
            >
              注册
          </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = { signUp }

const SignUpContainer = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SignUp))

export default SignUpContainer;