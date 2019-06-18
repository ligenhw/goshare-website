import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { queryArticles } from '../../store/actions/articles'
import Index from './Index'

const IndexContainer = ({ queryArticles, offset, articles, ...other }) => {

    const prevOffsetRef = useRef()
    prevOffsetRef.current = offset
    const prevArticlesRef = useRef()
    prevArticlesRef.current = articles

    useEffect(() => {
        if (prevOffsetRef.current <= prevArticlesRef.current.length) {
            queryArticles(prevOffsetRef.current)
        }
    }, [queryArticles])

    return (
        <Index loadMoreFn={() => {
            if (prevOffsetRef.current <= prevArticlesRef.current.length) {
                queryArticles(prevOffsetRef.current)
            }
        }} {...other} articles={articles}/>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    articles: state.articles.articles,
    offset: state.articles.offset,
    loadType: state.articles.loadType
})

const mapDispatchToProps = {
    queryArticles
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);