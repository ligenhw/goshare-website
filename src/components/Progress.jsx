import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(20),
    textAlign: 'center'
  },

}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress  />
    </div>
  );
}