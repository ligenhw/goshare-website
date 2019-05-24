import React from 'react';
import Sign from './Sign'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/user'
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GhLogin from '../third/GhLogin'
import QQLogin from '../third/QQLogin'
import AlipayLogin from '../third/AlipayLogin';

const SignIn = props => (
    <Box>
        <Sign title={'登录'} {...props} >
            <Box>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    ------ 社交账号登录 ------
            </Typography>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <GhLogin />
                    <QQLogin />
                    <AlipayLogin />
                </Grid>
            </Box>
        </Sign>
    </Box>
)

const mapDispatchToProps = { onClick: signIn }

export default connect(
    null,
    mapDispatchToProps
)(SignIn)