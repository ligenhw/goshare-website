import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTags } from '../../store/actions/tag'
import Tags from './Tags'

export default connect(
    state => ({
        tags: state.tags
    })
) (({ tags, dispatch }) => {

    useEffect(() => {
        dispatch(getTags)
    }, [dispatch])

    return (
        <Tags tags={tags}/>
    )
})