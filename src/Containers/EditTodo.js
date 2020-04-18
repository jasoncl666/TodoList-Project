import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../Actions'

class EditTodo extends Component {

    componentWillMount(){

    }

    render(){
        let input = {
            progress: ""
        }

        let todo = {
            id: "",
            progress: ""
        }

        const{
            current_todo,
            editTodo
        } = this.props

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
                        editTodo()
                    }}>
                    
                    <input ref={node => (input.progress = node)} placeholder={"current progress out of 10"}/>
                    <button type="submit">Update Progress</button>

                </form>
            </div>
        )}
}

const mapStateToProps = state => ({
    current_todo: state.currentTodo
})

const mapDispatchToProps = dispatch => ({
    editTodo: todo => dispatch(editTodo(todo))
  })

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)