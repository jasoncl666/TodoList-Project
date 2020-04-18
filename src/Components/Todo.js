import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import ProgressBar from './ProgressBar'

class Todo extends Component {

  onDetailClick = () => {
    this.props.setCurTodo()

    console.log(this.props.current_todo)
  }

  render(){

    const {
      onClick, 
      onDelete,
      setCurTodo,
      current_todo,
      todo
    } = this.props

    return (
      <div className="todo-item-container">
        <div
          onClick={onClick}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
          {todo.frequency}
          
        </div>
    
        {/* <div className="todo-progress-container">
          <div className="todo-current-progress" style={{width: todo.progress+"0%"}}></div>
        </div> */}

        <ProgressBar type={"group"} progress={todo.progress}/>
        <ProgressBar type={"user"} progress={todo.progress}/>

        <div className="todo-detail-link-container">
          <Link to="/detail" onClick={this.onDetailClick}>Details</Link>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    )    
  }
} 
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  current_todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired
}

export default Todo