import React, { Component } from 'react'
import BlogService from "../../services/BlogService";

class AboutAuthor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {},
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.authorID !== this.props.authorID) {
            const payload = {
                "authorID": Number(this.props.authorID)
            }

            const author = await BlogService.getAuthor(payload);

            this.setState({
                author: author.data[0]
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="about-author d-flex p-4 bg-dark">
                    <div className="bio mr-5">
                        <img src="/images/background3.png" alt="Image placeholder" className="img-fluid mb-4" />
                    </div>
                    <div className="desc">
                        <h3>{this.state.author["name"]}</h3>
                        <p>{this.state.author["about"]}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutAuthor;