import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

import InputItem from '../Components/InputItem'
import InputItemFrequency from '../Components/InputItemFrequency'

class AddTodo extends Component {

  constructor(props){
    super(props)

    this.state = {
        content: "",
        frequency: ""
    }

    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this)
  }

  handleContentChange(event) {
    // error check
    if (!event.target.value.trim()){
      console.log("error input")
      return
    }
    this.setState({content: event.target.value});
  }

  handleFrequencyChange(event) {
    // error check
    if (!event.target.value.trim()){
      console.log("error input")
      return
    }
    this.setState({frequency: event.target.value});
  }


  render(){
      const {
        addTodo
      } = this.props

      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
    
              addTodo(this.state)
            }}
          >
            <div className="input-container">

                <InputItem title={"Create Group"} placeholder={"e.g. sleep before 12"} onChange={this.handleContentChange}/> 
                {/* <InputItemFrequency title={"Frequency"} placeholder={"frequency"} onChange={this.handleFrequencyChange}/>  */}

                <div>
                  <h3>Settings</h3>
                  <textarea></textarea>
                </div>
                
                <button>All Day</button>
            </div>
    
            
            {/* <input ref={node => (input.progress = node)} placeholder={"progress out of 10"}/> */}
            <button type="submit">Add Todo</button>
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