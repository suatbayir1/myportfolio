import React, { Component } from 'react'
import BlogService from "../../services/BlogService";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        const categories = await BlogService.getCategories();


        if (categories.message.code === 200) {
            console.log(categories.data)
            this.setState({
                categories: categories.data
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="sidebar-box ">
                    <h3 className="heading-sidebar">Categories</h3>
                    <ul className="categories">
                        {
                            this.state.categories.map(category => (
                                <li><a href="/#">{category["category_name"]} <span>({category["post_count"]})</span></a></li>
                            ))
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Categories;