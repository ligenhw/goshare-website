import React, { useState, useEffect } from 'react';
import MarkdownDocs from '../markdown/MarkdownDocs'
import md from './about.md'

export default () => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(md)
            .then(res => res.text())
            .then(setData)
    }, [])

    return (
        <div>
            {data ?
                <MarkdownDocs
                    markdown={data}>
                </MarkdownDocs> : ''}
                </div>
    )
}