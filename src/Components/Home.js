import React from 'react'
import { Linkc} from "react-router-dom"

import FilterTab from './FilterTab'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'

import '../Css/Home.css'

const Home = () => (
    <div className="app-container">
      <AddTodo />
      <VisibleTodoList />
      <FilterTab />
    </div>
  
)


export default Home