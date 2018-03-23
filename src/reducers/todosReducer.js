import {
  ADD_TODO, 
  TOGGLE_TODO, 
  SET_FILTER} from '../actions/todos';

const initState = {
  filter: "SHOW_ALL",
  todos: [
    {
      text: 'default todo',
      active: true,
      id: 0
    }
  ]
}

let nextId = 1;
export const reducers = (state = initState, action) => {
  switch (action.type){
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            active: true,
            id: nextId++
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return (todo.id === action.id) ? {...todo, active: !todo.active} : todo
        })
      };
    case SET_FILTER:
      return {
        ...state,
        filter: filterReducer(state.filter, action)
      };
    default:
      return state;
  }
}

const filterReducer = (state, action) => {
  switch(action.type){
    case SET_FILTER:
      return action.filter
    default:
      return state;
  }
}