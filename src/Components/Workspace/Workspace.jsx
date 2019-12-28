import React, { useState, useEffect } from 'react';
import API from '../../API/API';
import Storage from '../../Services/Storage';
import BlogCard from '../BlogCard/BlogCard';
import Modal from '../Modal/Modal';


const Workspace = (props) => {
    
    const [loggedUser, setLoggedUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const onShow = () => {
        setShowModal (!showModal)
    }

    const removePost = (id) => {
        API.posts.remove(id);
        setPosts(posts.filter(post => post.id !== id));
    }

    const updatePost = (id) => {
        API.posts.update(id)
        setPosts(posts.filter(post => post.id === id));
    }

    useEffect(() => {
        if (!loggedUser.id) {
            API.people.getUser(Storage.get("user")).then(data => setLoggedUser(data));
        }
        if (loggedUser.id) {
            API.posts.getUserPosts(Storage.get("user")).then(res => res.json()).then(data => setPosts(data));
        }
    }, [loggedUser, showModal])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <button className="postbutton create" onClick={onShow}>Create new post</button>
                {!Storage.get("token") && <button className="postbutton" onClick= {props.logout}>Logout</button>}
            </div>
            <div className="workspace">
                <BlogCard posts={posts} buttonOpen = {true} handleRemove={removePost} handleUpdate={updatePost}/>
            </div>
            {showModal && <Modal author={loggedUser.username} onShow={onShow} />}
        </div>
    );
}

export default Workspace;
