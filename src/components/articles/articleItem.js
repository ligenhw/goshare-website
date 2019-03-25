import React from 'react';
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

const Posts = [
  {
    title: 'Featured post',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 12',
    desc:
      'This is a wider card with ...',
    views: 10,
    comments: 21,
    likes: 15,
  },
  {
    title: '服务器小白的我,是如何将node+mongodb项目部署在服务器上并进行性能优化的',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
  {
    title: 'Post title',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
  {
    title: 'Post title',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
  {
    title: 'Post title',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
  {
    title: 'Post title',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
  {
    title: 'Post title',
    img_url: 'https://upload-images.jianshu.io/upload_images/12890819-d3e3d25d20095b54.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    time: 'Nov 11',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    views: 10,
    comments: 21,
  },
];

const ArticleItem = ({ classes, item }) => (
  <ListItem divider='Divider'>
    <Link component={RouterLink}
      className={classes.root}
      rel="noopener noreferrer"
      to={`/articleDetail?article_id=${item.id}`}
    >
      <ListItemText className={classes.item}
      primary={item.title} 
      primaryTypographyProps={{variant: "h5"}}
      secondary={item.desc}
      secondaryTypographyProps={{variant: "h7"}}
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

function AlignItemsList(props) {
  let { classes, items } = props;
  items = Posts

  return (
    <List className={classes.root}>
      {
        items.map((item, i) => (
          <ArticleItem classes={classes} item={item} />
        ))
      }
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);