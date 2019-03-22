import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './markdown.css'

class Markdown extends React.Component {

  componentWillMount() {
    this.setState({
      markdown: "loading..."
    })
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
    fetch(this.props.file)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }
  // return <ReactMarkdown options={options} {...props} />;
  render() {
    console.log(this.state.markdown)
    return (<div
      id="content"
      className="article-detail"
      dangerouslySetInnerHTML={{
            __html: this.state.markdown !== null ? marked(this.state.markdown) : null,
        }}
      />)
  }
}

export default Markdown;