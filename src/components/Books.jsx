import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../store/actions/book'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    width: '600px',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3 * 2))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    padding: theme.spacing(8),
  },
  card: {
    display: 'flex',
  },
  cardDetail: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    margin: theme.spacing(2),
    height: '310px',
    width: '250px',
  },
  cardContent: {
    marginLeft: theme.spacing(5),
    width: '400px',
  },
  action: {
    align: 'bottom',
  },
}));

export default connect(
  state => ({
    books: state.books
  })
) (({ user, books, dispatch }) => {

  useEffect(() => {
      dispatch(getBooks)
  }, [dispatch])

  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Grid container className={classes.cardGrid} spacing={5} justify='center'>
      {books.map(card => (
        <Grid item key={card} >
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

              <CardActions className={classes.action}>
                <Link underline='none' target='_blank' href={card.href}>
                  <Button size="small" color="primary">
                    下载地址
                    </Button>
                  <Typography>
                    提取码: {user === null ? '登录后可见' : card.code}
                  </Typography>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
  )
})