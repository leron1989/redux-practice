import React from 'react';
import Filter from '../../components/todos/Filter'
import PropTypes from 'prop-types';
import {
  Filters,
  setFilter
} from '../../actions/todos';
import {connect} from 'react-redux';

class FooterFilter extends React.Component{

  static propTypes = {
    onFilterTodos: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }

  handleFilterTodos(filter){
    this.props.onFilterTodos(filter)
  }

  render(){
    return (
      <div>
        <span>Show: </span>
        <Filter active={this.props.filter === Filters.SHOW_ALL?true:false} 
          onClick={this.handleFilterTodos.bind(this, Filters.SHOW_ALL)}>
          all
        </Filter>
        <Filter active={this.props.filter === Filters.ACTIVE?true:false} 
          onClick={this.handleFilterTodos.bind(this, Filters.ACTIVE)}>
          active
        </Filter>
        <Filter active={this.props.filter === Filters.COMPLETED?true:false} 
          onClick={this.handleFilterTodos.bind(this, Filters.COMPLETED)}>
          completed
        </Filter>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onFilterTodos: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}

export default FooterFilter = connect(mapStateProps, mapDispatchProps)(FooterFilter);