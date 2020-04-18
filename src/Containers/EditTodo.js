import React, {useState} from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../Actions'

function EditTodo ({dispatch}) {

    let input = {
        progress: ""
    }

    let todo = {
        id: "",
        progress: ""
    }

    return(
        <div>
            <form
                 onSubmit={e => {
                    e.preventDefault()
          
                    // error check
                    if (!input.progress.value.trim()) {
                      console.log("invalid progress update")
                      return
                    }
          
                    // copy input values to "value" object and reset "input" object
                    todo.progress = input.progress.value.trim()
                    input.progress = ''
                    dispatch(editTodo(todo))
                }}>
                
                <input ref={node => (input.progress = node)} placeholder={"current progress out of 10"}/>
                <button type="submit">Update Progress</button>

            </form>
        </div>
    )
}

export default connect()(EditTodo)