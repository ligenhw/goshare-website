import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
    <ListItem container divider>
        <ListItemText primary={
            <Grid container>
                <Avatar className={classes.orangeAvatar}>
                    {user.username ? user.username.slice(-1).toUpperCase() : ''}
                </Avatar>
                <ListItemText
                    primary={user.username}
                    primaryTypographyProps={{ variant: "h5" }}
                    secondary={comment.time}
                />
            </Grid>}
            secondary={<Typography variant="h5">
                {comment.content}
            </Typography>}
        >
        </ListItemText>
    </ListItem>

)

export default withStyles(styles)(Comment);
