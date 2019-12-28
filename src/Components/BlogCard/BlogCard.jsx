import React from 'react'


const BlogCard = ({posts, buttonOpen, handleRemove, handleUpdate}) => {

    return (
        <div>
            {posts.map(blog => {
            return (
                <div className="card" key={blog.id}>
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                        {buttonOpen && <button className="postbutton" onClick={handleUpdate.bind(null, blog.id)} >Update</button>}
                        {buttonOpen && <button className="postbutton" onClick={handleRemove.bind(null, blog.id)}>Remove</button>}
                    </div>
                </div>
            )})}
        </div>   
    )
}

export default BlogCard
