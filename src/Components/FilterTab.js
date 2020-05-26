import React from 'react'
import FilterLink from '../Containers/FilterLink'
import { VisibilityFilters } from '../Actions'
import {Link} from 'react-router-dom'

const FilterTab = () => (
  <div className="filter-container">
    {/* <span>Show: </span> */}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>

    <Link to="/create">New Habbit</Link>
  </div>
)

export default FilterTab