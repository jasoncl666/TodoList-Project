import React from 'react'
import { Link } from "react-router-dom"

import FilterTab from './FilterTab'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'

import '../Css/Home.css'

const Home = () => (
    <div className="app-container">
      <AddTodo />
      <VisibleTodoList />
      <FilterTab />

      <Link to="/detail">Detail</Link>
    </div>
  
)


export default Home