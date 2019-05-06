import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar as MAvatar } from '@material-ui/core';

const styles = theme => ({
    orangeAvatar: {
        margin: 10,
        color: '#fff',
    },
})

const Avator = ({ classes, user }) => (
    <React.Fragment>
        {
            user.avatarurl ? <MAvatar src={user.avatarurl} /> :
                <MAvatar className={classes.orangeAvatar}>
                    {user.username ? user.username.slice(-1).toUpperCase() : ''}
                </MAvatar>
        }
    </React.Fragment>
)

export default withStyles(styles)(Avator)