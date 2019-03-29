import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { queryArticle } from '../store/actions/articles'

const styles = theme => ({
    title: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    }
});

class Template extends Component {

    render() {
        return (
            <div>Tempalte</div>
        )
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({article: state.article})

const mapDispatchToProps = { queryArticle }

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Template))

export default TemplateContainer;