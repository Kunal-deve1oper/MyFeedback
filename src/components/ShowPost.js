import React from 'react'

export default function ShowPost(props) {


    return (
        <div className="my-3 card">
            <div className="card-body">
                <h5 className="card-title">{`Post #${props.id}`}</h5>
                <p className="card-text"><strong>{props.postContent}</strong></p>
                <button className="btn btn-danger" onClick={()=>{props.deletePost(props.id)}}>Delete Post</button>
                <div>
                    <p className="my-2">Your comments :</p>
                </div>
                <div className="my-3 form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Write a comment</label>
                </div>
                <button className="btn btn-secondary">Post comment</button>
            </div>
        </div>
    )
}
