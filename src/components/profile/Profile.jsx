import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar, Typography, Tabs, Tab } from '@material-ui/core';
import { history } from '../../store/configureStore'
import ArticleList from '../articlelist'

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 152,
    height: 152,
    margin: 'auto',
  },
  editButton: {
    marginLeft: 0,
    marginTop: 12,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
      marginTop: 0,
    },
  },
  settings: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 5,
    },
  },
}));

function ProfilePage({ user }) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();
  const upSm = true

  console.log('profile page ', user)

  if (user === null) {
    history.push('/')
    return (<div></div>)
  }

  return (
    <React.Fragment>
      <Box component="main" maxWidth={935} margin="auto" padding="60px 20px 0">
        <Box mb="44px">
          <Grid container>
            <Grid item xs={4}>
              <Avatar
                className={classes.avatar}
                alt="My profile"
                src={user.avatarurl}
              />
            </Grid>
            <Grid item xs={8}>
              <Box clone mb="20px">
                <Grid container alignItems="center">
                  <Typography component="h1" variant="h4" lightWeight>
                    { user.username }
                  </Typography>
                  <Button className={classes.editButton} variant="outlined" fullWidth={!upSm}>
                     编辑
                  </Button>
                </Grid>
              </Box>
              <Box mb="20px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>20</b> 篇文章
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>3</b> 评论
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>26</b> 喜欢
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="subtitle1" bold>
                开发中...
              </Typography>
              {/* <Typography variant="subtitle1">Bangkok Christian College</Typography>
              <Typography variant="subtitle1">CU intania 96.</Typography> */}
            </Grid>
          </Grid>
        </Box>
        <Tabs
          value={tabIndex}
          centered
          onChange={(event, value) => {
            setTabIndex(value);
          }}
        >
          <Tab label="文章 📖" />
          <Tab label="留言 " />
          <Tab label="喜欢 ❤️"/>
        </Tabs>
        <ArticleList />
      </Box>
    </React.Fragment>
  );
}

export default ProfilePage
