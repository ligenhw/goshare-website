import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '../Badge/Badge'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    item: {
        margin: theme.spacing(0.5),
    }
}));

const colors = ['primary', 'info', 'success', 'warning', 'danger', 'rose']

export default function Tags({ tags }) {

    const classes = useStyles();

    return (
        <div>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                标签
                <span role="img" aria-label="achieve">
                  🏷️
                </span>
            </Typography>
            {
                tags.map(tag => (
                    <Badge key={tag.id} className={classes.item} color={ colors[Math.floor(Math.random() * colors.length)] }>
                        {tag.name}
                    </Badge>
                ))
            }
        </div>
    )
}