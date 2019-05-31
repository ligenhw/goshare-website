import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '../Avatar'
import teal from '@material-ui/core/colors/teal';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: teal[500],
    },
})

const Comment = ({ classes, user, comment }) => (
    <ListItem divider>
        <ListItemText primary={
            <Grid container>
                <Avatar className={classes.orangeAvatar} user={user} />
                <ListItemText
                    primary={user.username}
                    primaryTypographyProps={{ variant: "h5" }}
                    secondary={new Date(comment.parentTime).toLocaleString()}
                />
                <Typography component="pre">
                {comment.parentContent}
            </Typography>
            </Grid>}
            secondary={
                comment.subComments ? 
                    comment.subComments.map(sub => {
                        return sub ? (
                            <div>
                            <Typography display='block' variant='h5'>{sub.content}</Typography>
                            </div>
                        ): ''
                    })
                : ''
            }
        >
        </ListItemText>
        
    </ListItem>
)

export default withStyles(styles)(Comment);
