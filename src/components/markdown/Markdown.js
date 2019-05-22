import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './markdown.css'
import './article.css'
import Typography from '@material-ui/core/Typography';

const handleScroll = () => {
  const articleNav = document.querySelector('.article-nav')
  if (articleNav !== null) {
    articleNav.style['top'] = `${document.scrollingElement.scrollTop + 80}px`
  }
}

const getOffsetToPage = (elem) => {
  let top = elem.offsetTop
  let left = elem.offsetLeft
  let posParent = elem.offsetParent
  while (posParent !== null) {
    top += posParent.offsetTop
    left += posParent.offsetLeft
    posParent = posParent.offsetParent
  }
  return { top, left }
}

const getNavClickHandler = (index) => () => {
  if (index === 0) {
    document.scrollingElement.scrollTop = 0
  } else {
    const el = document.querySelector(`#header-anchor-${index - 1}`)
    const top = getOffsetToPage(el).top
    document.scrollingElement.scrollTop = top
  }
}

class Markdown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      headerTextArr: [],
      index: false,
    }

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
  }

  getHeaderTextArr = () => {
    const contentHeaderElements = document.querySelectorAll('.mb-article  h2')
    const arr = ['索引']
    console.log(contentHeaderElements)
    Array.prototype.forEach.call(contentHeaderElements, (elem, index) => {
      elem.setAttribute('id', `header-anchor-${index}`)
      arr.push(elem.innerHTML)
    })
    this.setState({
      headerTextArr: arr,
    })
    console.log(this.state.headerTextArr)
  }

  componentDidMount() {
    window.addEventListener('scroll', handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll)
  }

  render() {
    const { markdown } = this.props

    if (!this.state.index) {
    setTimeout(() => {
      this.getHeaderTextArr()
    }, 2000)
    this.setState({
      index: true
    })
    }

    return (
      <div>
        {/* 索引 */}
        <ul className='article-nav'>
          {
            this.state.headerTextArr.map((headerText, index) => (
              <Typography type="body2" component="li"
                key={index}
                data-header-anchor={index}
                className="article-nav-anchor"
                onClick={getNavClickHandler(index)}
              >
                {headerText}
              </Typography>
            ))
          }
        </ul>
        <div
          id="content"
          className='mb-article'
          dangerouslySetInnerHTML={{
            __html: markdown ? marked(markdown) : null,
          }}
        />
      </div>
    )
  }
}

export default Markdown;