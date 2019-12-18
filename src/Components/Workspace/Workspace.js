import React, { Component } from 'react';
import Storage from '../../Services/Storage';
import API from '../../API/API'
import BlogCard from '../BlogCard/BlogCard';

class Workspace extends Component {
    constructor(props) {
        super(props)
        this.userId = Storage.get("user")
        this.state = {
            userData: {
                lastname: '',
                username: '',
                email: '',
            },
            posts: []
        }
    }

    componentDidMount() {
        API.people.getUser(this.userId).then((response) => {
            return response.json().then((data) => {
                this.setState({ userData: data })
            })
        })
        API.posts.getUserPosts(this.userId).then(res => res.json()).then(data => this.setState({posts: data}))
    }
    
    render() {
        const { posts } = this.state;
        return (
            <div className="container">
            <button>Create new post</button>
                <div>
                    <BlogCard posts={posts}/>
                </div>
            </div>
        )
    }
}

export default Workspace;
