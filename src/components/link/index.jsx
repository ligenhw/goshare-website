import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Links from './Links';
import CommentPage from '../comment'

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(6),
        minHeight: '60vh',
    }
}));

export default () => {

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="md" className={classes.mainGrid}>
                <Typography variant="h4" gutterBottom>
                    友情链接
            </Typography>
            <Links />
            </Container>
            <Container maxWidth="lg">
                <CommentPage blogId={-2} />
            </Container>
        </div>
    )
}