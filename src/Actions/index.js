import { connect } from "react-redux"

let nextTodoId = 0

export const addTodo = todo => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  content: todo.content,
  frequency: todo.frequency,
  progress: todo.progress
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  id: todo.id,
  progress: todo.progress
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setCurTodo = todo => ({
  type: 'SET_CUR_TODO',
  todo
})