import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Archives from './Archives'
import { queryAllArticles } from '../../store/actions/articles'

const ArchievesContainer = ({ queryAllArticles, ...other}) => {

    // disable
    useEffect(() => {
        queryAllArticles()
    }, [queryAllArticles])

    return (
        <Archives {...other} />
    )
}

export default connect(
    state => ({
        archives: state.articles
    }), {
        queryAllArticles
    }
)(ArchievesContainer);


