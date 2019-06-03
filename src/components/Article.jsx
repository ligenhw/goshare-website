import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MarkdownDocs from './markdown/MarkdownDocs';
import { connect } from 'react-redux';
import { queryArticle, deleteArticle } from '../store/actions/articles'
import { getQueryStringByName } from '../utils/url'
import Avatar from './Avatar'
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { history } from '../store/configureStore'
import CommentPage from './comment'
import Container from '@material-ui/core/Container'

const styles = theme => ({
  title: {
    margin: theme.spacing(3),
  },
  author: {
    margin: theme.spacing(2),
  },
  meta: {
    margin: theme.spacing(2),
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
          <p className={classes.title}></p>
          <Typography variant="h3" align="center">
            {article.blog.title}
          </Typography>
          <Author classes={classes} article={article} edite={edite} deleteArticle={deleteArticle} />
        </Container>

        {article.blog.content ? <MarkdownDocs markdown={article.blog.content}> </MarkdownDocs> : null}

        {article.blog.id ?
          <Container maxWidth="lg">
            <CommentPage blogId={article.blog.id} />
          </Container> : null}

      </div>
    )
  }
}

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