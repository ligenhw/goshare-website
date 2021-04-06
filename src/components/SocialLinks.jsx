import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const social = [
    {
        name: 'github',
        link: 'https://github.com/ligenhw/',
    }
]

const useStyles = makeStyles(theme => ({
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

export default function SocialLinks () {

    const classes = useStyles();

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            链接 
            <span role="img" aria-label="achieve">
              🔗
            </span>
        </Typography>
        {
            social.map(network => (
                <Link display="block" target='_blank' variant="body1" href={network.link} key={network.link}>
                    {network.name}
                </Link>
            ))
        }
    </React.Fragment>
    )
}
