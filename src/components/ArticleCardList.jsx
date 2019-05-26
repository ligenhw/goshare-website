import React from 'react';
import ArticleCard from './ArticleCard'

// TODO: change to HOC
export default ({ articles }) => {

    return (
        articles ?
        articles.map((item, i) => (
            <ArticleCard key={item.id} post={item} />
        )): ''
    )
}