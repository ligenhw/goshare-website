import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../Avatar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Button } from '@material-ui/core';
import CommentInput from './CommentInput'

const useStyles = makeStyles(theme => ({
    user: {
        marginLeft: theme.spacing(2),
    },
    sub: {
        borderLeft: `4px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[800]
            }`,
        padding: theme.spacing(0.5, 0, 0.5, 3),
        margin: theme.spacing(1,0,1,2)
    }
}));

const Sub = ({ sub, getUserById, onReplyAction }) => {

    const classes = useStyles();

    return (
        <div className={classes.sub}>
            <Typography display='inline' color='secondary'>
            {getUserById(sub.userId).username} 
            </Typography>
            <Typography display='inline'>
                {' @ '}
            {getUserById(sub.replyTo).username} : 
            </Typography>
            <Typography variant='h6' component='pre' gutterBottom>{sub.content}
            </Typography>
            <Typography variant='body2' display='inline'>{new Date(sub.time).toLocaleString()}
            </Typography>
            <Button onClick={e => {
                onReplyAction(sub.userId)
            }}>
                回复
            </Button>
        </div>
    )
}

export default ({ blogId, getUserById, comment }) => {

    const user = getUserById(comment.parentUserId)

    const classes = useStyles();
    const [reply, setReply] = useState(null)

    return (
        <div>
            <Grid container alignItems='center'>
                <Avatar user={user} />
                <ListItemText
                    className={classes.user}
                    primary={user.username}
                    primaryTypographyProps={{ variant: "h5" }}
                    secondary={new Date(comment.parentTime).toLocaleString()}
                />
            </Grid>
            <Typography variant='h6' component='pre'>
                {comment.parentContent}
            </Typography>

            <Button onClick={e => {
                setReply(comment.parentUserId)
            }}>
                回复
            </Button>

            {comment.subComments ?
                comment.subComments.map(sub => {
                    return sub ? (<Sub sub={sub} key={sub.id} onReplyAction={() => {
                        setReply(sub.userId)
                    }} getUserById={getUserById} />
                    ) : null
                })
                : null}
            <Divider />

            {reply ? <CommentInput blogId={blogId} replyTo={reply} parentId={comment.parentId}/> : null}
        </div>
    )
}