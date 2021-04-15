import React, { Component } from 'react'
import SearchButton from "./SearchButton"
import Categories from "./Categories";
import RecentBlog from "./RecentBlog";
import TagCloud from "./TagCloud"
import Note from "./Note"

class RightSideBar extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchButton />
                <Categories />
                <RecentBlog />
                <TagCloud />
                <Note />
            </React.Fragment>
        )
    }
}

export default RightSideBar;