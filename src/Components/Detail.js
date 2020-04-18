import React, {Component} from 'react'
import { Link } from "react-router-dom"

import EditTodo from '../Containers/EditTodo'

class Detail extends Component {

    render(){

        return(
            <div className="app-container">
                <EditTodo />
                <Link to="/">Home</Link>
            </div>
        )
    }

}

export default Detail