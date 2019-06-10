import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(3),
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

export default ({ post }) => {

  const classes = useStyles();

  return (
    <CardActionArea component="a" href={`/article/${post.id}`}>
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
            <Typography variant="subtitle1" color="primary">
              继续阅读...
              </Typography>
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
    </CardActionArea>
  )
}


