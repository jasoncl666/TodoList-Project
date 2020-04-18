import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import "../Css/Todos.css"

const TodoList = ({ 
  todos, 
  current_todo, 
  toggleTodo, 
  deleteTodo, 
  onSetCurTodo }) => (

    todos.map(todo => (
      todo.deleted? "" : <Todo 
        key={todo.id} 
        todo={todo} 
        current_todo={current_todo}
        onClick={() => toggleTodo(todo.id)} 
        onDelete={() => deleteTodo(todo.id)} 
        setCurTodo={() => onSetCurTodo(todo)}/>
    ))
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  // current_todo: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  // }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onSetCurTodo: PropTypes.func.isRequired
}

export default TodoList