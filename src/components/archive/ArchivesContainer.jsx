import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Archives from './Archives'
import { queryArticles } from '../../store/actions/articles'

const ArchievesContainer = ({ queryArticles, ...other}) => {

    // disable
    useEffect(() => {
        queryArticles(0)
    }, [queryArticles])

    return (
        <Archives {...other} />
    )
}

export default connect(
    state => ({
        archives: state.articles
    }), {
        queryArticles
    }
)(ArchievesContainer);


