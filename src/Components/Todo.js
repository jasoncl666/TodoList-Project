import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, frequency, onDelete }) => (
  <div>
    <div
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
      {frequency}
    </div>

    <button onClick={onDelete}>Delete</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo