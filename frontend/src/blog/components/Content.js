import React, { Component } from 'react'
import PostComment from "./PostComment"
import Comments from "./Comments"
import AboutAuthor from "./AboutAuthor"
import PostContent from "./PostContent"
import BlogService from "../../services/BlogService";

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }

    async componentDidMount() {
        await this.getPost();
    }

    getPost = async () => {
        const payload = {
            "postID": this.props.postID
        }

        const post = await BlogService.getPost(payload);
        this.setState({ post: post.data[0] });
    }

    render() {
        return (
            <React.Fragment>
                <PostContent post={this.state.post} />
                <AboutAuthor authorID={this.state.post.author} />
                <Comments />
                <PostComment />
            </React.Fragment>
        )
    }
}
