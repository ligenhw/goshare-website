import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CommentList from './CommentList'
import { queryComments } from '../../store/actions/comments'
import { Divider } from '@material-ui/core';
import CommentInput from './CommentInput'

export default connect(
    state => ({
        comments: state.comments.comments,
        users: state.comments.users
    }),
    {
        queryComments,
    }
) (({ blogId, queryComments, ...other }) => {

    useEffect(() => {
        queryComments(blogId)
    }, [queryComments, blogId])
    
    return (
        <React.Fragment>
            <CommentInput />
            <Typography variant="h5" gutterBottom>
                {other.comments.length} 条评论
            </Typography>
            <Divider />

            <CommentList {...other}/>
        </React.Fragment>
    )
})