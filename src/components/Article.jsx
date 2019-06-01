import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MarkdownDocs from './markdown/MarkdownDocs';
import { connect } from 'react-redux';
import { queryArticle, deleteArticle } from '../store/actions/articles'
import { getQueryStringByName } from '../utils/url'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Avatar from './Avatar'
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { history } from '../store/configureStore'
import CommentList from './comment/CommentList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'

const styles = theme => ({
  title: {
    margin: theme.spacing.unit * 3,
  },
  author: {
    margin: theme.spacing.unit * 2,
  },
  markdown: {
    width: 'auto',
    marginTop: theme.spacing.unit * 100,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  content: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,

  },
  meta: {
    margin: theme.spacing.unit * 2,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  picAvatar: {
    objectFit: 'cover'
  }
});

const Meta = ({ classes, meta }) => (
  <React.Fragment>
    <EyeIcon /> 1
    <MessageIcon type="message" /> 0
    <FavoriteIcon type="heart" /> 2
    <Typography display='inline' component="span" className={classes.meta}>
      {new Date(meta.time).toLocaleString()}
    </Typography>
  </React.Fragment>
)

const Author = ({ classes, article, edite, deleteArticle }) => (
  <Grid container alignItems="center">
    <Avatar user={article.user} />

    <Grid item xs className={classes.author}>
      <Typography variant="h5" color="textSecondary">
        {article.user.username}
      </Typography>
      <Meta classes={classes} meta={article.blog} />
    </Grid>
    {edite ?
      (<Grid container xs justify='flex-end'>
        <Button className={classes.edite} onClick={event => history.push('/editor?article_id=' + article.blog.id)}>
          编辑
        </Button>
        <Button className={classes.edite}
          onClick={event => deleteArticle(article.blog.id)}>
          删除
        </Button>
      </Grid>) : ''}
  </Grid >
)

class Article extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
    this.props.queryArticle(getQueryStringByName('article_id'))
  }

  render() {
    const { classes, article, user, deleteArticle } = this.props
    const edite = user !== null && user.id === article.user.id

    return (
      <div >
        <Container maxWidth="md">
        <CssBaseline />
        <p className={classes.title}></p>
        <Typography variant="h3" align="center">
          {article.blog.title}
        </Typography>
        <Author classes={classes} article={article} edite={edite} deleteArticle={deleteArticle} />
        </Container>

        {article.blog.content ?
          <MarkdownDocs
            markdown={article.blog.content}>
          </MarkdownDocs> : ''
        }

<Container maxWidth="md">
        <CommentList blogID={article.blog.id} />
        </Container>
      </div>
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

const mapDispatchToProps = { queryArticle, deleteArticle }

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Article))

export default ArticleContainer;