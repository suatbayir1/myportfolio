import React, { Component } from 'react'
import image1 from "../../assets/images/bg_1.jpg";
import BlogService from "../../services/BlogService";

class RecentBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        await this.getPosts();
    }

    getPosts = async () => {
        const payload = {
            "skip": 0,
            "limit": 3
        }

        const posts = await BlogService.getPosts(payload);

        console.log(posts);

        this.setState({
            posts: posts.data
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="sidebar-box ">
                    <h3 className="heading-sidebar">Recent Blog</h3>

                    {
                        this.state.posts.map(post => (
                            <div className="block-21 mb-4 d-flex" key={post["id"]}>
                                <a className="blog-img mr-4" style={{ backgroundImage: "url(" + image1 + ")" }}></a>
                                <div className="text">
                                    <h3 className="heading"><a href="/#">{post["post_name"]}</a></h3>
                                    <div className="meta">
                                        <div><a href="/#"><span className="icon-calendar"></span> {post["created_at"]}</a></div>
                                        <div><a href="/#"><span className="icon-person"></span> {post["author_name"]}</a></div>
                                        <div><a href="/#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default RecentBlog;