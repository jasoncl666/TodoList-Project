import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

function AddTodo ({ dispatch }) {

  const [addPanelOn, setAddPanelState] = useState(false)

  // input field reference
  let input = {
    content: "",
    frequency: "",
    progress: ""
  }

  let value = {
    content: "",
    frequency: "",
    progress: ""
  }

  function onAddPanelOpen(){
    setAddPanelState(true)
  }

  function onAddPanelClose(){
    setAddPanelState(false)
  }

  return (
    <div>

      {!addPanelOn && <button onClick={onAddPanelOpen}>Add Goal</button>}
      
      {addPanelOn && <form
        onSubmit={e => {
          e.preventDefault()

          // error check
          if (!input.content.value.trim() || !input.frequency.value.trim() || !input.progress.value.trim()) {
            console.log("error input")
            return
          }

          // copy input values to "value" object and reset "input" object
          Object.entries(input).map(entry => {

            let key = entry[0]
            let val = entry[1].value

            value[key] =val

            entry[1].value = ''
          })

          dispatch(addTodo(value))

          onAddPanelClose()
        }}
      >
        <input ref={node => (input.content = node)} placeholder={"content"}/>
        <input ref={node => (input.frequency = node)} placeholder={"frequency"}/>
        <input ref={node => (input.progress = node)} placeholder={"progress out of 10"}/>
        <button type="submit">Add Todo</button>
      </form>}


    </div>
  )
}

export default connect()(AddTodo)