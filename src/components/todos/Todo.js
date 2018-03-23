import React from 'react';

export default class Todo extends React.Component{

  render(){
    console.log(this.props)
    return (
      <li style={this.props.active ? {textDecoration: "none"} : {textDecoration: "line-through"}}
        onClick={this.props.toggleTodo}>
        {this.props.text}
      </li>
    )
  }
}