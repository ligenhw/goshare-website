import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
    }

    componentWillMount() {
        this.loading()
    }

    loading() {
        fetch('/api/blog/')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => this.setState({blogs: json}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <ul>{
                this.state.blogs.map(blog => 
                    (<li>
                        <div>
                        <h3>{blog.title}</h3>
                        <h5>{blog.content}</h5>
                        </div>
                    </li>)
                )}
            </ul>
        )
    }
}

export default Test