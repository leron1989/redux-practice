import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class TodoList extends React.Component{
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onToggleTodo: PropTypes.func.isRequired
  }

  handleToggleTodo(id){
    this.props.onToggleTodo(id);
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id} active={todo.active} text={todo.text}
              toggleTodo={this.handleToggleTodo.bind(this, todo.id)}/>
          )
        })}
      </ul>
    )
  }
}