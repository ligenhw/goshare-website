import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { queryComments } from '../../store/actions/comments'

const styles = theme => ({
    title: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    }
});

class CommentList extends Component {

    componentWillReceiveProps(props) {
        const { blogID } = props
        if (blogID && this.props.blogID !== blogID) {
            this.props.queryComments(blogID)
        }
    }

    render() {
        console.log(this.props)
        const {blogID, comments, users} = this.props
        if (!blogID) {
            return (<div>没有评论!</div>)
        }
        return (
            <ul>
            {
                comments.map((comment, i) => (
                    <li key={comment.id}>
                        author: {
                            users.filter(u => u.id === comment.userId)[0].username
                        }
                        <br/>
                        {comment.content}
                    </li>
                ))
            }
            </ul>
        )
    }
}

CommentList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    comments: state.comments.comments,
    users: state.comments.users
})

const mapDispatchToProps = { queryComments }

const CommentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CommentList))

export default CommentListContainer;