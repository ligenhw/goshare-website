import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { queryArticlesByUid } from '../../store/actions/articles'
import ArticleCardList from '../ArticleCardList'

export default connect(
    state => ({
        articles: state.profileArticles,
    })
) (({ userId, articles, dispatch }) => {

    useEffect(() => {
        dispatch(queryArticlesByUid(userId))
    }, [dispatch, userId])

    return (
        <ArticleCardList articles={articles}/>
    )
})