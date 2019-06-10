import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';

import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import { createArticle, queryArticle, modifyArticle } from '../../store/actions/articles'
import {publishMsg} from '../../store/actions/msg'
import { getQueryStringByName } from '../../utils/url'
import MarkdownElement from '../markdown/MarkdownElement';

const styles = theme => ({
    layout: {
        display: 'flex',
        height: '100vh',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flex: 1,
        border: 'none',
        fontSize: '1.25rem',
        fontFamily: 'Roboto',
    },
    dense: {
        marginTop: 16,
    },
    pannel: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
        flex: 1,
    },
    rightPannel: {
        overflowY: 'auto',
        height: '100%',
    },
    iconSmall: {
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
});

const validate = (title, content) => {
    if (title.trim() !== '' && content.trim() !== '') {
        return true
    }

    return false
}

class Editor extends Component {

    state = {
        title: '',
        content: '',
    };

    componentWillMount() {
        const id = getQueryStringByName('article_id')
        if (id !== '') {
            this.props.queryArticle(id)
        }
    }

    componentWillReceiveProps(props) {
        const { blog } = props
        this.setState({
            title: blog.title,
            content: blog.content
        })
    }

    onChange = name => event => this.setState({
        [name]: event.target.value
    })

    publish = () => {
        let id = getQueryStringByName('article_id')
        id = parseInt(id)

        const { title, content } = this.state

        if (!validate(title, content)) {
            this.props.publishMsg('标题或内容不能为空')
            return
        }

        if (isNaN(id)) {
            this.props.createArticle({
                title,
                content,
                user_id: this.props.user.id,
            })
        } else {
            this.props.modifyArticle({
                id,
                title,
                content
            })
        }
    }

    render() {
        const { classes } = this.props

        const md = this.state.title !== '' ? '# ' + this.state.title + '\n' + this.state.content : this.state.content

        return (
            <Grid container spacing={16} className={classes.layout}>
                <Grid item xs={12} md={6} className={classes.pannel} >
                    <TextField
                        id="title"
                        value={this.state.title}
                        onChange={this.onChange('title')}
                        label="题目"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <textarea
                      id="content"
                      value={this.state.content}
                      onChange={this.onChange('content')}
                      multiline
                      fullWidth
                      className={classes.textField}
                     />
                    <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                        <SaveIcon onClick={this.publish} />
                    </Fab>
                </Grid>
                <Grid item className={classes.rightPannel} xs={12} md={6}>
                    <MarkdownElement text={md} disableToc />
                </Grid>
            </Grid>
        )
    }
}

Editor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
    blog: state.article.blog,
})

const mapDispatchToProps = {
    createArticle,
    queryArticle,
    modifyArticle,
    publishMsg,
}

const EditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Editor))

export default withStyles(styles)(EditorContainer);