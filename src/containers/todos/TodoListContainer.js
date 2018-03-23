import TodoList from '../../components/todos/TodoList';
import {toggleTodo, Filters} from '../../actions/todos';
import {connect} from 'react-redux';

const getFilterTodos = (filter, todos) => {
  switch(filter){
    case Filters.ACTIVE:
      return todos.filter((todo) => todo.active);
    case Filters.COMPLETED:
      return todos.filter((todo) => !todo.active)
    default:
      return todos;
  }
}

const mapStateProps = (state) => {
  // console.log("mapstateprops", state)
  return {
    todos: getFilterTodos(state.filter, state.todos)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateProps, mapDispatchProps)(TodoList);