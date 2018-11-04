// import undoable, { includeAction } from 'redux-undo';

// const todo = (state, action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       };
//     default:
//       return state;
//   }
// }

// const todos = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ];
//     default:
//       return state;
//   }
// }

// const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO'])});

// export default undoableTodos;

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state;
  }
}

export default todos;