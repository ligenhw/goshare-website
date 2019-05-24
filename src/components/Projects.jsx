import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  cardGrid: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
  {
    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558194989693&di=343b695986bfc99bb4771d2bdd8101cb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fb3b2e00d91d14081b995f9ac14b2c4c8.jpeg",
    title: "goshare",
    subTitle: "基于go标准库的api后台服务",
    href: "https://github.com/ligenhw/goshare",
  },
  {
    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558195156306&di=bcfb5fa21ea9bbf56c67e20fd5c5a526&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20141203%2F20141203221548_850.jpg",
    title: "goshare-website",
    subTitle: "基于 React + Material-ui 实现的 博客前端",
    href: "https://github.com/ligenhw/goshare-website",
  },
  {
    img: "https://developer.android.google.cn/images/landing/kotlin-logo.svg",
    title: "pwstore",
    subTitle: "android密码管理应用， 基于kotlin",
    href: "https://github.com/ligenhw/pwstore",
  }
];

function Projects(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={ classes.cardGrid }>
          {/* End hero unit */}
          <Grid container spacing={5}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img} // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.subTitle}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link underline='none' target='_blank' href={card.href}>
                      <Button size="small" color="primary">
                        Star
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects)