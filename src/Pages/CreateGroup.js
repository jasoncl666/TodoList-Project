import React, {Component} from "react"
import {Link} from "react-router-dom"
import AddTodo from "../Containers/AddTodo"

import "../Css/CreateGroup.css"

class CreateGroup extends Component {
    render(){
        return(
            <div className="app-container create-container">

                <AddTodo />
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default CreateGroup