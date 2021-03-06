import React from 'react'

import FilterTab from '../Components/FilterTab'
import VisibleTodoList from '../Containers/VisibleTodoList'

import '../Assets/css/Home.css'

const Home = () => (
    <div className="app-container">
      <VisibleTodoList />
      <FilterTab />
    </div>
  
)


export default Home