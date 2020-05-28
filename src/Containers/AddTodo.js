import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { Dropdown } from 'semantic-ui-react'

import { addTodo } from '../Actions'


import InputItem from '../Components/InputItem'
import InputItemFrequency from '../Components/InputItemFrequency'

import 'semantic-ui-css/semantic.min.css'


const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'angular1', text: 'Angular1', value: 'angular1' },
  { key: 'angular2', text: 'Angular2', value: 'angular2' },
  { key: 'angular3', text: 'Angular3', value: 'angular3' },
  { key: 'css', text: 'CSS', value: 'css' }
]

class AddTodo extends Component {

  constructor(props){
    super(props)

    this.state = {
        friends: []
    }

    this.nameRef = React.createRef();
    this.selectRef = React.createRef();
  }

  render(){
      const {
        addTodo
      } = this.props

      return (
        <div className="add-form">

          <div className="form-header">      
              <h4>MOTIVATION</h4>
              <h2>Let's Get Started</h2>
              {/* <h5>Have a new goal to achieve? Tell us about it and find someone to achieive this goal together!</h5> */}
          </div>  

          <form
            onSubmit={e => {
              e.preventDefault()

              let todo = {
                content: this.nameRef.current.value,
                frequency: this.selectRef.current.value
              }
              addTodo(todo)

              this.nameRef.current.value = null;
              this.selectRef.current.value = null;
            }}
          >

            <div className="form-input">
              <h3></h3>
              <input ref={this.nameRef} placeholder={"Name of your Goal"}></input>
            </div>
            
            <div className="form-select">
              <h3>Duration</h3>
              <select ref={this.selectRef}>
                <option>1</option>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>40</option>
                <option>100</option>
                <option>200</option>
              </select>
              <h3>Days</h3>
            </div>

            <div className="form-friend">
              <h3></h3>
              <Dropdown placeholder='Invite friends...' fluid multiple selection options={options} />

            </div>


            <button type="submit">Create Goal</button>

            <button className="back-btn"><a href="/">Back</a></button>
          </form>
    
        </div>
      )
  }
  
}

const mapDispatchToState = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
}
)
export default connect(null, mapDispatchToState)(AddTodo)