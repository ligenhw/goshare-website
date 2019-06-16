import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import uplogo from '../assets/uplogo.png'

const styles = theme => ({
    link: {
        textDecoration: 'none',
        height: '20px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
    },
    img: {
        width: '52px',
    }
})

const CdnLink = ({ classes, user }) => (
    <div className={classes.link}>
        <Link target='_blank' href={'https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral'} >
          <img className={classes.img}
           alt={'img'}
           src={uplogo} />
        </Link>
        </div>
)

export default withStyles(styles)(CdnLink)