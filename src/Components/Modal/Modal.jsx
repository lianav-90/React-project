import React, { useState } from 'react';
import API from '../../API/API';
import Storage from '../../Services/Storage';

const Modal = ({ onShow, author }) => {

    const [post, setPost] = useState({ title: "", description: "" });

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setPost ({
          ...post, 
          [name]: value
        })
    }

    const createPost = (post) => {
        const newPost = {
            author: author,
            description: post.description,
            personId: Storage.get("user"),
            title: post.title
        }

        if (post.title && post.description) {
            onShow();
            API.posts.set(newPost)
            .then(res => {
                if(!res.ok) {
                  throw new Error();
                }
                return res.json()
            })
            .catch(() => {
                alert("Invalid data");
            })  
        } else {
           alert("Please fill in the required fields:");
        }
    }

    return (
        <div className="myModalBack">
            <div className="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={onShow} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="control-label">Title:</label>
                                    <input onChange={onHandleChange} name="title" value={post.title} type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="control-label">Description:</label>
                                    <textarea onChange={onHandleChange} name="description" value={post.description} className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={createPost.bind(null, post)} type="button" className="postbutton btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;