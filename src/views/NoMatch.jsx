import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        height: '80vh',
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(14),
    },
    text: {
        fontSize: '8.8em',
        fontWeight: 700,
        color: theme.palette.primary.main,
    },
    desc: {
        fontSize: '2.4em',
        fontWeight: 400,
        color: theme.palette.secondary.main,
    },
    back: {
        fontSize: '1.4em',
        fontWeight: 200,
        marginTop: theme.spacing(8),
    }
}));

export default function NoMatch() {

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h3" align="center" className={classes.text} gutterBottom>
                404
          </Typography>
            <Typography variant="h4" align="center" className={classes.desc} gutterBottom>
                您要找的界面不存在
          </Typography>
            <Link underline='none' display='block' align='center' href='/' className={classes.back}>
                返回
            </Link>
        </Container>
    )
}