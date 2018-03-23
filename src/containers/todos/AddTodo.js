import React from 'react';
import PropTypes from 'prop-types';
import {addTodo} from '../../actions/todos'
import {connect} from 'react-redux';

class AddTodo extends React.Component{
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleValueChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleAddTodo(){
    this.props.onAddTodo(this.state.value);
  }

  render(){
    return (
      <div>
        <input value={this.state.value} onChange={this.handleValueChange.bind(this)}/>
        <button onClick={this.handleAddTodo.bind(this)}>
          Add Todo
        </button>
      </div>
    )
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text))
  }
}

export default AddTodo = connect(null,mapDispatchProps)(AddTodo);