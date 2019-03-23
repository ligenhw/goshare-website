import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Markdown from '../Markdown';
import post from './blog-post.3.md';

const styles = theme => ({
    title: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
    author: {
      marginTop: theme.spacing.unit * 2,
    },
    markdown: {
        width: 'auto',
        marginTop: theme.spacing.unit * 100,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    content: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: theme.primary
    },
    }
  });

const Article = ({classes}) => (
    <React.Fragment>
        <p className={classes.title}></p>
        <Typography variant="h3" align="center">
        vue移动端复杂表格表头
        </Typography>
        <Typography className={classes.author} variant="h5" align="center" color="textSecondary">
         gen
        </Typography>
        <div className={classes.content}>
        <Markdown className={classes.markdown}
                  file={post}>
        </Markdown>
        </div>
    </React.Fragment>
)

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);