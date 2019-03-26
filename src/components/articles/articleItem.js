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

const ListItemLink = ({ primary, secondary, to, classes, item }) => (
  <ListItem divider button component={props => <RouterLink to={to} {...props} />}>
    <ListItemText inset
      primary={primary}
      primaryTypographyProps={{ variant: "h5" }}
      secondary={secondary}
    />
    {item.img_url ?
      (<Hidden xsDown>
        <img src={item.img_url} alt='img' style={{ width: '125px', height: '100px', position: 'relative', right: 0 }} />
      </Hidden>) : ''}
  </ListItem>
);

const Meta = ({ classes, item }) => (
  <React.Fragment>
    <EyeIcon /> {item.views}
    <MessageIcon type="message" /> {item.comments}
    <FavoriteIcon type="heart" /> {item.likes}
    <Typography inline component="span" className={classes.meta}>
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
    console.log(this.props)

    return (
      <List className={classes.root}>
        {
          articles.map((item, i) => (
            <ListItemLink key={item.id}
              classes={classes} item={item}
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography component="span">
                    {item.desc}
                  </Typography>
                  <Meta classes={classes} item={item} />
                </React.Fragment>
              }
              to={`/articleDetail?article_id=${item.id}`} />
          ))
        }
      </List>
    );
  }
}

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ articles: state.articles })

const mapDispatchToProps = { queryAllArticles }

const ArticleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ArticleList))

export default ArticleListContainer;