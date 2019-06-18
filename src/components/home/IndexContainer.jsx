import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { queryArticles } from '../../store/actions/articles'
import Index from './Index'

const IndexContainer = ({ queryArticles,...other }) => {

    const [offset, setOffset] = useState(0)
    const prevOffsetRef = useRef()
    prevOffsetRef.current = offset

    console.log('IndexContainer ', offset)

    useEffect(() => {
        console.log('use effect query articles offset : ' + offset)
        queryArticles(offset)
    }, [queryArticles, offset])

    console.log('Index container offset ', offset)

    return (
        <Index loadMoreFn={() => {
            const value = prevOffsetRef.current + 5
            setOffset(value)
            console.log('loadmore fn ', value)
        }} {...other} />
    )
}

const mapStateToProps = state => ({
    user: state.user,
    articles: state.articles.articles,
    loadType: state.articles.loadType
})

const mapDispatchToProps = {
    queryArticles
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);