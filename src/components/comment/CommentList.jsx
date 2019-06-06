import React from 'react'
import List from '@material-ui/core/List';
import Comment from './Comment'

export default ({ blogId, comments, users }) => (
    < List >
        {
            comments.map((comment, i) => (
                <Comment key={comment.parentId} blogId={blogId} getUserById={
                    id => users.filter(u => u.id === id)[0]
                } comment={comment} />
            ))
        }
    </List >
)