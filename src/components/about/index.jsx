import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Markdown from '../markdown/Markdown'
import md from './about.md'

export default () => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(md)
            .then(res => res.text())
            .then(setData)
    }, [])

    return (
        <Container maxWidth="md">
            <p></p>
            {data ?
                <Markdown
                    markdown={data}>
                </Markdown> : ''}
        </Container>
    )
}