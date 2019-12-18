import React, { useState, useEffect } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import BloggerCard from '../../Components/BloggerCard/BloggerCard';
import API from '../../API/API';

function Home() {
    const [bloggers, setBloggers] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        API.people.get().then(res => res.json()).then(data => setBloggers(data));
        API.posts.get().then(res => res.json()).then(data => setPosts(data));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    {<BloggerCard bloggers={bloggers}/>}
                </div>
                <div className="col-9">
                    <BlogCard posts={posts}/>
                </div>
        </div>
        </div>
    )
}

export default Home;