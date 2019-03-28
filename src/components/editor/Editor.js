import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Markdown from '../markdown/Markdown';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { createArticle } from '../../store/actions/articles'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    pannel: {
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

    onChange = name => event => this.setState({
        [name]: event.target.value
    })

    publish = () => this.props.createArticle({
        title: this.state.title,
        content: this.state.content,
        user_id: 1, // TODO change it.
    })

    render() {
        const { classes } = this.props

        const md = this.state.title !== '' ? '# ' + this.state.title + '\n' + this.state.content : this.state.content

        return (
            <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="title"
                        onChange={this.onChange('title')}
                        label="题目"
                        fullWidth
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    {/* <Button variant="contained" size="small" className={classes.button}>
                        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                        保存
                    </Button> */}
                    <TextField
                        id="content"
                        onChange={this.onChange('content')}
                        label="正文"
                        multiline
                        rows="17"
                        fullWidth
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                        <SaveIcon onClick={this.publish}/>
                    </Fab>
                </Grid>
                <Grid item className={classes.pannel} xs={12} md={6}>
                    <Markdown markdown={md} />
                </Grid>
            </Grid>
        )
    }
}

Editor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = { createArticle }

const EditorContainer = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Editor))

export default withStyles(styles)(EditorContainer);