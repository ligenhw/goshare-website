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
import Button from '@material-ui/core/Button';
import ghsvg from '../../assets/github.svg'
import './App.css';

import { connect } from 'react-redux';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroUnit: {
    backgroundColor: theme.palette.primary[500],
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  cardGrid: {
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
      width: 1300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            开源博客
            </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            采用流行的前后分离实现
            </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            前端页面基于 React + Material-UI
            </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            后端 API 服务基于 go 标准库
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Link color='inherit' underline='none' href={'https://github.com/ligenhw/goshare'}>
                  <Button variant="contained" color="primary">
                    前端 goshare-website 项目
                  <img src={ghsvg} alt='logo' className='App-logo' />
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link underline='none' href={'https://github.com/ligenhw/goshare'}>
                  <Button variant="contained" color="primary">
                    后端 goshare 项目
                  <img src={ghsvg} alt='logo' className='App-logo' />
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )

    const readerSubFeature = (
      <Grid container spacing={40} className={classes.cardGrid}>
        {subFeature.map(post => (
          <Grid item key={post.id} xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.time}
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
        {/* Sub featured posts */}
        {readerSubFeature}
        {/* End sub featured posts */}
        <div className={classes.layout}>
          <main>

            <Grid container spacing={40} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                {console.log("xxxxx", this.props)}
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
                  <Link inline={false} key={archive}>{archive}</Link>
                ))}
                <SocialLinks />
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
        </div>
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