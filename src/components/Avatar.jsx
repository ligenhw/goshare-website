import React from 'react';
import { Avatar as MAvatar } from '@material-ui/core';

export default function Avatar({ user }) {

    return (
        <React.Fragment>
            {
                user.avatarurl ? <MAvatar src={user.avatarurl} /> :
                    <MAvatar>
                        {user.username ? user.username.slice(-1).toUpperCase() : ''}
                    </MAvatar>
            }
        </React.Fragment>
    )
}