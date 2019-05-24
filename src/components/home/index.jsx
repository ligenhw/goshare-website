import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ArticleList from '../ArticleList'
import SocialLinks from '../SocialLinks'
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import { queryAllArticles } from '../../store/actions/articles'
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';

const styles = theme => ({
  heroUnit: {
    height: '60vh',
    backgroundImage: 'url(https://source.unsplash.com/random/1920x600)',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  cardGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
});

const archives = [
  'February 2020',
  'January 2020',
  'December 2019',
];

class Index extends Component {

  componentWillMount() {
    this.props.queryAllArticles()
  }

  render() {
    const { classes, articles } = this.props;

    const haveImgArticle = articles.filter(a => a.img_url !== null)
    const subFeature = haveImgArticle.slice(0, 2)

    const readerMainFeatured = (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          
        </div>
      </div>
    )

    const readerSubFeature = (
      <Grid container spacing={4} className={classes.cardGrid}>
        {subFeature.map(post => (
          <Grid item key={post.id} xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {new Date(post.time).toLocaleString()}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.desc}
                  </Typography>
                  <Link variant="subtitle1"
                    component={RouterLink}
                    to={`/articleDetail?article_id=${post.id}`}>
                    继续阅读...
                  </Link>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.img_url}
                  title="Image title"
                />
              </Hidden>
            </Card>
          </Grid>
        ))}
      </Grid>
    )

    return (
      <React.Fragment>
        <CssBaseline />
        {/* Main featured post */}
        {readerMainFeatured}
        {/* End main featured post */}
        <Container maxWidth="lg">
          {/* Sub featured posts */}
          {readerSubFeature}
          {/* End sub featured posts */}
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <ArticleList articles={this.props.articles} />
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    公告
                </Typography>
                  <Typography>
                    分享web开发,移动开发。go, python, java, kotlin, js ... 目前持续开发中..
                </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                  归档
                </Typography>
                {archives.map(archive => (
                  <Link display="block" key={archive}>{archive}</Link>
                ))}
                <SocialLinks />
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  articles: state.articles
})

const mapDispatchToProps = {
  queryAllArticles
}

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Index))

export default IndexContainer;