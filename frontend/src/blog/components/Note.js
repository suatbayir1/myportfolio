import React, { Component } from 'react'

class Note extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-box ">
                    <h3 className="heading-sidebar">Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Note;