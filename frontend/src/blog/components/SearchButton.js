import React, { Component } from 'react'

class SearchButton extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-box">
                    <form action="#" className="search-form">
                        <div className="form-group">
                            <span className="icon icon-search"></span>
                            <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchButton