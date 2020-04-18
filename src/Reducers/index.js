import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import currentTodo from './currentTodo'

export default combineReducers({
    todos,
    visibilityFilter,
    currentTodo
})