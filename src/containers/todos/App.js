import React from 'react';
import AddTodo from './AddTodo';
import TodoListContainer from './TodoListContainer';
import FooterFilters from './FooterFilters';

export default class App extends React.Component{

  render(){
    return (
      <div>
        <AddTodo />
        <TodoListContainer />
        <FooterFilters />
      </div>
    )
  }
}