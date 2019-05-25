import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import SocialLinks from './SocialLinks'

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

const archives = [
    'March 2020',
    'February 2020',
];

export default ({ post }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                    公告 🔥
                </Typography>
                <Typography>
                    致力于分享web开发中的流行技术, 目前本站也在持续开发优化中...
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                归档 📚
              </Typography>
            {
                archives.map(archive => (
                    <Link display="block" variant="body1" href="#" key={archive}>
                        {archive}
                    </Link>
                ))
            }
            <SocialLinks />
        </React.Fragment>
    )
}