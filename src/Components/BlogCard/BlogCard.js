import React from 'react';

const BlogCard = ({posts}) => {

    return (
        <div>
            {posts.map(blog => {
            return (
                <div className="card" key={blog.id}>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">Some text</p>
                </div>
            </div>
            )})}
        </div>
        
    )
}

export default BlogCard
