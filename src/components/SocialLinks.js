import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    link: {
        marginTop: theme.spacing.unit,
    }
})

const SocialLinks = ({ classes }) => (
    <React.Fragment>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            链接
        </Typography>
        {social.map((s, i) => (
            <Link key={i} gutterBottom inline={false} className={classes.link} underline='none' href={s.link}>{s.name}
            </Link>
        ))}
    </React.Fragment>
)

SocialLinks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialLinks);
