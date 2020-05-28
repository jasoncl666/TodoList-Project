import React, {Component} from "react"
import AddTodo from "../Containers/AddTodo"

import "../Assets/css/CreateGroup.css"

class CreateGroup extends Component {
    render(){
        return(
            <div className="app-container create-container">
                <AddTodo />
            </div>
        )
    }
}

export default CreateGroup