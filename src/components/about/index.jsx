import React, { useState, useEffect } from 'react';
import MarkdownDocs from '../markdown/MarkdownDocs'
import md from './about.md'
import CommentPage from '../comment'
import Container from '@material-ui/core/Container'

export default function About() {
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
            <Container maxWidth="lg">
                <CommentPage blogId={-1} />
            </Container>
        </div>
    )
}