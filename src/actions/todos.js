export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const Filters = {
  SHOW_ALL: "SHOW_ALL",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED"
}

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}