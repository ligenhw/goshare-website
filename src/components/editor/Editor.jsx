import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';

import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import { createArticle, queryArticle, modifyArticle } from '../../store/actions/articles'
import { getQueryStringByName } from '../../utils/url'
import MarkdownDocs from '../markdown/MarkdownDocs';

const styles = theme => ({
    layout: {
        display: 'flex',
        height: '100vh',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    pannel: {
        height: '800px',
        overflow: 'auto',
    },
    rightPannel: {
        overflowY: 'auto',
        height: '100%',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

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
        if (isNaN(id)) {
            this.props.createArticle({
                title: this.state.title,
                content: this.state.content,
                user_id: this.props.user.id,
            })
        } else {
            this.props.modifyArticle({
                id,
                title: this.state.title,
                content: this.state.content
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
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="content"
                        value={this.state.content}
                        onChange={this.onChange('content')}
                        label="正文"
                        multiline

                        fullWidth
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                        <SaveIcon onClick={this.publish} />
                    </Fab>
                </Grid>
                <Grid item className={classes.rightPannel} xs={12} md={6}>
                    <MarkdownDocs markdown={md} disableToc/>
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
}

const EditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Editor))

export default withStyles(styles)(EditorContainer);