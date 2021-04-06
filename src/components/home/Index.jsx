import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Sidebar from '../Sidebar';
import Banner from '../Banner'
import ArticleCardList from '../ArticleCardList'
import LoadMore from '../LoadMore'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Home({ articles, loadType, loadMoreFn }) {
  const classes = useStyles();

  return (
    <React.Fragment>
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
              <LoadMore loadType={loadType} loadMoreFn={() => {
                loadMoreFn()
                console.log('listview loading more')
              }}/>
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
