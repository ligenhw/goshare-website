/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { getContents } from '../../utils/parseMarkdown';

function MarkdownDocsContents(props) {
  const { children, markdown } = props;
  const contents = getContents(markdown);

  return children({ contents });
}

MarkdownDocsContents.propTypes = {
  children: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
};

export default MarkdownDocsContents;
