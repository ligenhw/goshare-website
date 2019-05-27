import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import links from './data'

const useStyles = makeStyles(theme => ({
    item: {

    }
}));

const render = (link, classes) => (
    <Grid item>
        <Avatar>
        </Avatar>
        <Link href={link.url} className={classes.item}>
            {link.name}
        </Link>
    </Grid>
)

export default () => {

    const classes = useStyles();

    return (
        <Grid container direction='row'>
            {
                links.map(link => render(link, classes))
            }
        </Grid>
    )
}