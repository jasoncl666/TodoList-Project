const currentTodo = (state = {}, action) => {
    switch(action.type){
        case 'SET_CUR_TODO':
            return action.todo
        default:
            return state
    }
}

export default currentTodo