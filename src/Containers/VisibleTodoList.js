import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, setCurTodo } from '../Actions'
import TodoList from '../Components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  current_todo: state.currentTodo
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  onSetCurTodo: todo => dispatch(setCurTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)