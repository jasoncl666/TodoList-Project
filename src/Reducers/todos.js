const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.content,
            frequency: action.frequency,
            completed: false,
            deleted: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )

      case 'DELETE_TODO':
        return state.map(todo => 
          todo.id === action.id ? { ...todo, deleted: true } : { ...todo })
      default:
        return state
    }
  }
  
  export default todos