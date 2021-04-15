import React, { Component } from 'react'

class Comments extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pt-5 mt-5">
                    <h3 className="mb-5">6 Comments</h3>
                    <ul className="comment-list">
                        <li className="comment">
                            <div className="vcard bio">
                                <img src="/images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                                <h3>John Doe</h3>
                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="/#" className="reply">Reply</a></p>
                            </div>
                        </li>

                        <li className="comment">
                            <div className="vcard bio">
                                <img src="/images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                                <h3>John Doe</h3>
                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="/#" className="reply">Reply</a></p>
                            </div>

                            <ul className="children">
                                <li className="comment">
                                    <div className="vcard bio">
                                        <img src="/images/person_1.jpg" alt="Image placeholder" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>John Doe</h3>
                                        <div className="meta">June 20, 2019 at 2:21pm</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                        <p><a href="/#" className="reply">Reply</a></p>
                                    </div>


                                    <ul className="children">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="/images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="/#" className="reply">Reply</a></p>
                                            </div>

                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="/images/person_1.jpg" alt="Image placeholder" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta">June 20, 2019 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                        <p><a href="/#" className="reply">Reply</a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="comment">
                            <div className="vcard bio">
                                <img src="/images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                                <h3>John Doe</h3>
                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="/#" className="reply">Reply</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Comments;