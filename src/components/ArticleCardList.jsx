import React from 'react';
import ArticleCard from './ArticleCard'

class Ad extends React.Component {
    componentDidMount () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  
  render () {
      return (
        <ins className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-4643545024162976"
        data-ad-slot="7104538281"></ins>
      );
    }
  }

const ArticleCardAd = ({ key, post }) => (
    <div key={key}>
        <ArticleCard post={post} />
        <Ad />
    </div>
)

// TODO: change to HOC
export default ({ articles }) => {

    return (
        articles ?
            articles.map((item, i) => (
                (i > 0 && i % 10 === 0) ? <ArticleCardAd key={item.id} post={item}/> : <ArticleCard key={item.id} post={item}/>
            )) : ''
    )
}