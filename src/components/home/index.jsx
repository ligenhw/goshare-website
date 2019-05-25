import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Sidebar from '../Sidebar';
import Banner from '../Banner'
import ArticleCardList from '../ArticleCardList'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default ({ articles }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Main featured post */}
      <Banner />
      {/* Main featured post end */}
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                全部文章
              </Typography>
              <Divider />
              <ArticleCardList articles={articles} />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Sidebar />
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}