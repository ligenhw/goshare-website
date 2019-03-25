import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { queryAllArticles } from '../../store/actions/articles'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  meta: {
    margin: theme.spacing.unit * 2,
  }
});

const ArticleItem = ({ classes, item }) => (
  <ListItem divider='Divider'>
    <Link component={RouterLink}
      className={classes.root}
      rel="noopener noreferrer"
      to={`/articleDetail?article_id=${item.id}`}
    >
      <ListItemText className={classes.item}
        primary={item.title}
        primaryTypographyProps={{ variant: "h5" }}
        secondary={item.desc}
        secondaryTypographyProps={{ variant: "h7" }}
      />

      <Meta classes={classes} item={item} />
    </Link>
    <Hidden xsDown>
      <img src={item.img_url} alt='img' style={{ width: '125px', height: '100px', position: 'relative', right: 0 }} />
    </Hidden>

  </ListItem>
)

const Meta = ({ classes, item }) => (
  <React.Fragment className={classes.meta}>
    <Link component={RouterLink}
      className={classes.meta}
      rel="noopener noreferrer"
      to={`/articleDetail?article_id=${item.id}`}
    >
      <EyeIcon /> {item.views}
    </Link>{' '}
    <Link component={RouterLink} className={classes.meta}
      to={`/articleDetail?article_id=${item.id}`}
    >
      <MessageIcon type="message" theme="outlined" /> {item.comments}
    </Link>{' '}
    <Link component={RouterLink} className={classes.meta}
      to={`/articleDetail?article_id=${item.id}`}
    >
      <FavoriteIcon type="heart" theme="outlined" /> {item.likes}
    </Link>
    <Typography variant="inherit" inline className={classes.meta}>
      {item.time}
    </Typography>
  </React.Fragment>
)

class ArticleList extends Component {

  componentWillMount() {
    this.props.queryAllArticles()
  }

  render() {
    const { classes, articles } = this.props;

    console.log(' list .... ', this.props)

    return (
      <List className={classes.root}>
        {
          articles.map((item, i) => (
            <ArticleItem classes={classes} item={item} />
          ))
        }
      </List>
    );
  }

}

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({articles : state.articles})

const mapDispatchToProps = { queryAllArticles }

const ArticleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ArticleList))

export default ArticleListContainer;