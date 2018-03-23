import TodoList from '../../components/todos/TodoList';
import {toggleTodo} from '../../actions/todos';
import {connect} from 'react-redux';

const mapStateProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateProps, mapDispatchProps)(TodoList);