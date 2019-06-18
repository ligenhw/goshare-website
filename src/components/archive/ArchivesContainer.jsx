import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Archives from './Archives'
import { queryArchives } from '../../store/actions/articles'

const ArchievesContainer = ({ queryArchives, ...other}) => {

    // disable
    useEffect(() => {
        queryArchives()
    }, [queryArchives])

    return (
        <Archives {...other} />
    )
}

export default connect(
    state => ({
        archives: state.archives
    }), {
        queryArchives
    }
)(ArchievesContainer);


