import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { queryAllArticles } from '../../store/actions/articles'
import Index from './Index'

const IndexContainer = ({ queryAllArticles, ...other }) => {

    useEffect(() => {
        queryAllArticles()
    }, [])

    return (
        <Index {...other}/>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    articles: state.articles
})

const mapDispatchToProps = {
    queryAllArticles
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);