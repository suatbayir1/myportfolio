import React, { Component } from 'react'

class TagCloud extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-box ">
                    <h3 className="heading-sidebar">Tag Cloud</h3>
                    <div className="tagcloud">
                        <a href="/#" className="tag-cloud-link">house</a>
                        <a href="/#" className="tag-cloud-link">office</a>
                        <a href="/#" className="tag-cloud-link">building</a>
                        <a href="/#" className="tag-cloud-link">land</a>
                        <a href="/#" className="tag-cloud-link">table</a>
                        <a href="/#" className="tag-cloud-link">interior</a>
                        <a href="/#" className="tag-cloud-link">exterior</a>
                        <a href="/#" className="tag-cloud-link">industrial</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TagCloud;