import React, { Component } from 'react'

class PostComment extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="comment-form-wrap pt-5">
                    <h3 className="mb-5">Leave a comment</h3>
                    <form action="#" className="p-5 bg-dark">
                        <div className="form-group">
                            <label for="name">Name *</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email *</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="website">Website</label>
                            <input type="url" className="form-control" id="website" />
                        </div>

                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default PostComment;