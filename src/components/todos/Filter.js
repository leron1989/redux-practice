import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component{
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
  }

  render(){
    return (
      <button onClick={this.props.onClick} disabled={this.props.active}>
        {this.props.children}
      </button>
    )
  }
}