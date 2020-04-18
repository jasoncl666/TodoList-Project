import React from 'react'
import FilterTab from './FilterTab'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'

import '../Css/App.css'



const App = () => (
  <div className="app-container">
    <AddTodo />
    <VisibleTodoList />
    <FilterTab />
  </div>
)


export default App