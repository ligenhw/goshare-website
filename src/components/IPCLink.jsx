import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    link: {
        textDecoration: 'none',
        height: '20px',
        lineHeight: '20px'
    },
    img: {
        width: '20px',
    },
    content: {
        margin: theme.spacing(1),
        height: '20px',
        lineHeight: '20px',
        color: '#939393'
    }
})

const IPCLink = ({ classes, user }) => (
    <div align="center">
        <Link target='_blank' href={'https://www.beian.miit.gov.cn'}>
          <img className={classes.img}
           alt={'img'}
           src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" />
          <Typography display='inline' align="center" className={classes.content}>
          京ICP备19021303号
          </Typography>
        </Link>
    </div>
)

export default withStyles(styles)(IPCLink)