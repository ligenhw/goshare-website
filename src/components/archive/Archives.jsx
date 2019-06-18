import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    header: {
        marginTop: theme.spacing(3),
    },
}));

export default ({ archives }) => {

    const classes = useStyles();

    return (
        <List >
            {
                !archives ? '' :
                    archives.map((a, i) => {
                        let date = new Date(a.time)
                        if (i === 0 ||
                            (i > 0 && date.getMonth() !== new Date(archives[i - 1].time).getMonth())
                        ) {
                            const dayAndTitle = date.getDate() + '日    ' + a.title
                            return (
                                <div key={a.id}>
                                    <Typography variant="h5" gutterBottom className={classes.header}>
                                        {date.getFullYear() + ' 年' + (date.getMonth() + 1) + '月'}
                                    </Typography>
                                    <Divider />
                                    <ListItem button component={RouterLink} to={`/article/${a.id}`}>
                                        {dayAndTitle}
                                    </ListItem>
                                </div>
                            )
                        }

                        return (
                            <ListItem button component={RouterLink} to={`/article/${a.id}`}>
                                {date.getDate() + '日 ' + a.title}
                            </ListItem>
                        )
                    })
            }
        </List>
    )
}