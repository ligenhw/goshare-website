/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MarkdownElement from './MarkdownElement';
import AppContent from './AppContent'
import AppTableOfContents from './AppTableOfContents';
import MarkdownDocsContents from './MarkdownDocsContents';
import {
  getHeaders,
} from '../../utils/parseMarkdown';

const styles = theme => ({
  header: {
    display: 'flex',
  },
  markdownElement: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 1),
  },
  markdownElementBlog: {

    margin: 'auto',
    padding: 0,
    fontSize: theme.typography.pxToRem(18),
    fontFamily: `Roboto Slab, ${theme.typography.fontFamily}`,
    fontWeight: 300,
    '& p, & ul, & ol': {
      lineHeight: 1.7,
    },
    '& strong': {
      fontWeight: 400,
      fontFamily: theme.typography.fontFamily,
    },
    '& img': {
      display: 'block',
      margin: 'auto',
    },
    '& .blog-description': {
      fontSize: theme.typography.pxToRem(14),
      textAlign: 'center',
    },
  },
  footer: {
    marginTop: theme.spacing(12),
  },
  pagination: {
    margin: theme.spacing(3, 0, 4),
    display: 'flex',
    justifyContent: 'space-between',
  },
  pageLinkButton: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
  },
  chevronLeftIcon: {
    marginRight: theme.spacing(1),
  },
  chevronRightIcon: {
    marginLeft: theme.spacing(1),
  },
});


function MarkdownDocs(props) {
  const {
    blog,
    classes,
    disableToc,
    markdown: markdownProp,
    markdownLocation: markdownLocationProp,
  } = props;


  let markdown = markdownProp;

  const headers = getHeaders(markdown);
  // eslint-disable-next-line no-underscore-dangle
  global.__MARKED_UNIQUE__ = {};

  return (
    <MarkdownDocsContents markdown={markdown} markdownLocation={markdownLocationProp}>
      {({ contents, markdownLocation }) => (
        <div className={classes.header}>
          {disableToc ? null : <AppTableOfContents contents={contents} />}
          
          <AppContent disableToc={disableToc} className={classes.root}>
            {contents.map((content, index) => {

              return (
                <MarkdownElement
                  className={clsx(classes.markdownElement, { [classes.markdownElementBlog]: blog })}
                  key={index}
                  text={content}
                />
              );
            })}
          </AppContent>
          </div>
      )}
    </MarkdownDocsContents>
  );
}

MarkdownDocs.propTypes = {
  classes: PropTypes.object.isRequired,
  markdown: PropTypes.string,
  // You can define the direction location of the markdown file.
  // Otherwise, we try to determine it with an heuristic.
  markdownLocation: PropTypes.string,
};

MarkdownDocs.defaultProps = {
  disableAd: false,
  disableToc: false,
};

export default withStyles(styles)(MarkdownDocs);
