import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Markdown from './markdown/Markdown';
import { connect } from 'react-redux';
import { queryArticle } from '../store/actions/articles'
import { getQueryStringByName } from '../utils/url'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
  },
  meta: {
    margin: theme.spacing.unit * 2,
  },
  inline: {
    display: 'inline'
  },
  edite: {
    float: 'right'
  },
  author: {
    'align-items': 'center'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
});

const Meta = ({ classes, meta }) => (
  <React.Fragment>
    <EyeIcon /> 1
    <MessageIcon type="message" /> 0
    <FavoriteIcon type="heart" /> 2
    <Typography inline component="span" className={classes.meta}>
      {meta.time}
    </Typography>
  </React.Fragment>
)

const Author = ({ classes, article, edite }) => (
  <Grid container alignItems="center">
    <Avatar className={classes.orangeAvatar}>N</Avatar>
    <Grid item xs>
      <div className={classes.inline}>
        <Typography className={classes.author} variant="h5" color="textSecondary">
          {article.user.username}
        </Typography>
        <Meta classes={classes} meta={article.blog} />
      </div>
    </Grid>
    {edite ?
      (<Grid item xs>
        <Button className={classes.edite}>
          编辑文章
    </Button>
      </Grid>) : ''}
  </Grid >
)

class Article extends Component {

  componentWillMount() {
    this.props.queryArticle(getQueryStringByName('article_id'))
  }

  render() {
    const { classes, article, user } = this.props
    const edite = user !== null && user.id === article.user.id

    return (
      <React.Fragment>
        <p className={classes.title}></p>
        <Typography variant="h3" align="center">
          {article.blog.title}
        </Typography>

        <div className={classes.content}>
          <Author classes={classes} article={article} edite={edite} />
          <Markdown className={classes.markdown}
            markdown={article.blog.content}>
          </Markdown>
        </div>
      </React.Fragment>
    )
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  article: state.article,
  user: state.user,
})

const mapDispatchToProps = { queryArticle }

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Article))

export default ArticleContainer;