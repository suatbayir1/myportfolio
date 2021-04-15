import React, { Component } from 'react'
import RightSideBar from "./RightSideBar";
import Content from "./Content";


class BlogDetail extends Component {
    render() {
        return (
            <section class="ftco-section" id="blog-detail-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 ">
                            <Content postID={this.props.postID} />
                        </div>

                        <div class="col-lg-4 sidebar ">
                            <RightSideBar />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default BlogDetail;