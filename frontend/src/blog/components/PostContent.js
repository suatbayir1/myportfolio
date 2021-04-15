import React, { Component } from 'react'
import renderHTML from "react-render-html";

class PostContent extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="mb-3">{this.props.post["post_name"]}</h2>

                <div>
                    {this.props.post["content"] !== undefined && renderHTML(this.props.post["content"])}
                </div>
            </React.Fragment>
        )
    }
}

export default PostContent