import React, { Component } from 'react'
import LinkHeader from "../../shared/LinkHeader";
import Footer from "../../shared/Footer";
import BlogBackgroundImage from "../components/BlogBackgroundImage";
import BlogDetail from "../components/BlogDetail";


class BlogPageContainer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <LinkHeader />
                <BlogDetail postID={this.props.match.params.id} />
                <Footer />
            </React.Fragment>
        )
    }
}
export default BlogPageContainer;