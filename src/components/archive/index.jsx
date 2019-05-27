import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ArchivesContainer from './ArchivesContainer';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
        minHeight: '80vh',
    }
}));

export default () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                归档文章
              </Typography>
              <ArchivesContainer />
            </Grid>
            {/* End main content */}
          </Grid>
        </main>
      </Container>
    )
}