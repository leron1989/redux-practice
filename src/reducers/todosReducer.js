import {
  ADD_TODO, 
  TOGGLE_TODO, 
  SET_FILTER, 
  Filters} from '../actions/todos';

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
      const newState = [
        ...state.todos,
        {
          text: action.text,
          active: true,
          id: nextId++
        }
      ]
      console.log(newState)
      return newState;
    case TOGGLE_TODO:
      return state.todos.map((todo) => {
        return (todo.id === action.id) ? {...todo, active: !todo.active} : todo
      });
    case SET_FILTER:
      return filterReducer(state.todos, action);
    default:
      return state;
  }
}

const filterReducer = (state = {}, action) => {
  switch(action.filter){
    case Filters.SHOW_ALL:
      return {...state}
    case Filters.ACTIVE:
      return state.filter((todo) => {
        return todo.ACTIVE
      })
    case Filters.COMPLETED:
      return state.filter((todo) => {
        return !todo.ACTIVE
      })
    default:
      return state;
  }
}