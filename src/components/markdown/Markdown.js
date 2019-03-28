import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './markdown.css'

class Markdown extends React.Component {

  constructor(props) {
    super(props)
    
    marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: true,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false,
			highlight: function(code) {
				return hljs.highlightAuto(code).value;
			},
		});
  }

  render() {
    const { markdown } = this.props

    return (<div
      id="content"
      dangerouslySetInnerHTML={{
            __html: markdown ? marked(markdown) : null,
        }}
      />)
  }
}

export default Markdown;