import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '../Avatar'
import indigo from '@material-ui/core/colors/indigo';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { history } from '../../store/configureStore'
import { createComment } from '../../store/actions/comments'

const styles = theme => ({
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: indigo[500],
    },
    button: {
        margin: theme.spacing.unit,
    },
})

class CommentInput extends Component {

    state = {
        content: ''
    }

    onChange = (e) => this.setState({
        content: e.target.value
    })

    onPublish = (e) => {
        const content = this.state.content
        this.props.createComment(this.props.blog.id, content)
        this.setState({
            content: ''
        })
    }

    render() {
        const { classes, user } = this.props
        return (
            <Grid container>
                {user ? <Avatar user={user} /> : ''}
                <Grid item xs>
                    {user ?
                        <Grid container justify='flex-end' >
                            <TextField
                                id="content"
                                value={this.state.content}
                                onChange={this.onChange}
                                label="写下你的评论..."
                                multiline
                                rows="2"
                                fullWidth
                                className={classes.textField}
                                margin="normal"
                                variant="filled"
                            />
                            <Button variant="contained" color="secondary" className={classes.button} onClick={e => this.setState({
                                content: ''
                            })}>
                                取消
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button} onClick={this.onPublish}>
                                发布
                            </Button>
                        </Grid>
                        :
                        <Grid container justify='center' alignItems='center'>
                            <Button variant="contained" color="secondary" className={classes.button} onClick={e => history.push('/login')}>
                                登录
                            </Button>
                            <Typography variant="h6" inline>
                                后发表评论
                        </Typography>
                        </Grid>
                    }
                </Grid>
            </Grid>
        )
    }
}

CommentInput.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    user: state.user,
    blog: state.article.blog,
})

const mapDispatchToProps = { createComment }

const CommentInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(CommentInput))

export default CommentInputContainer;