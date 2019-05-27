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
    '2019 年5月',
    '2019 年4月',
];

export default () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                    公告 
                    <span role="img" aria-label="dashbord">
                      🔥
                    </span>
                </Typography>
                <Typography>
                    致力于分享web开发中的流行技术, 目前本站在持续开发优化中...
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                归档 
                <span role="img" aria-label="achieve">
                  📚
                </span>
              </Typography>
            {
                archives.map(archive => (
                    <Link display="block" variant="body1" href='/achive' key={archive}>
                        {archive}
                    </Link>
                ))
            }
            <SocialLinks />
        </React.Fragment>
    )
}