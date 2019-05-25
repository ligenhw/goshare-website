import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const social = [
    {
        name: 'github',
        link: 'https://github.com/ligenhw/',
    },
    {
        name: '简书',
        link: 'https://www.jianshu.com/u/0cc81b23c1f0',
    }
]

const useStyles = makeStyles(theme => ({
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

export default () => {

    const classes = useStyles();

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            链接 🔗
        </Typography>
        {
            social.map(network => (
                <Link display="block" variant="body1" href={network.link} key={network.link}>
                    {network.name}
                </Link>
            ))
        }
    </React.Fragment>
    )
}
