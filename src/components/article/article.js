import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Markdown from '../Markdown';
import { connect } from 'react-redux';
import { queryArticle } from '../../store/actions/articles'
import { getQueryStringByName } from '../../utils/url'

const styles = theme => ({
    title: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
    author: {
      marginTop: theme.spacing.unit * 2,
    },
    markdown: {
        width: 'auto',
        marginTop: theme.spacing.unit * 100,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    content: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: theme.primary
    },
    }
  });

class Article extends Component {

  componentWillMount() {
    this.props.queryArticle(getQueryStringByName('article_id'))
  }

  render() {
    const {classes, article} = this.props

    return (
      <React.Fragment>
          <p className={classes.title}></p>
          <Typography variant="h3" align="center">
            {article.title}
          </Typography>
          <Typography className={classes.author} variant="h5" align="center" color="textSecondary">
           gen
          </Typography>
          <div className={classes.content}>
          <Markdown className={classes.markdown}
                    markdown={article.content}>
          </Markdown>
          </div>
      </React.Fragment>
    )
  }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({article: state.article})

const mapDispatchToProps = { queryArticle }

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Article))

export default ArticleContainer;