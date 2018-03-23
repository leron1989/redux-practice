import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {increaseNum, decreaseNum} from '../../actions/counter'

class Counter extends React.Component{
  static propTypes = {
    num: PropTypes.number.isRequired,
    onIncreaseNum: PropTypes.func.isRequired,
    onDecreaseNum: PropTypes.func.isRequired
  }

  handleIncreaseNum(){
    this._increaseNum();
  }

  handleIncreaseOdd(){
    if(this.props.num % 2 !== 0){
      this._increaseNum()
    }
    
  }

  handleIncreaseAsyn(){
    setTimeout(() => {
      this._increaseNum()
    }, 1000);
  }

  handleDecreaseNum(){
    this._decreaseNum()
  }

  _increaseNum(){
    if(this.props.onIncreaseNum){
      this.props.onIncreaseNum(1)
    }
  }

  _decreaseNum(){
    if(this.props.onDecreaseNum){
      this.props.onDecreaseNum(1)
    }
  }

  render(){
    return (
      <div>
        <span>Clicked: </span>
        <span>{this.props.num} </span>
        <span>times </span>
        <button onClick={this.handleIncreaseNum.bind(this)}>+</button>
        <button onClick={this.handleDecreaseNum.bind(this)}>-</button>
        <button onClick={this.handleIncreaseOdd.bind(this)}>Increment if odd</button>
        <button onClick={this.handleIncreaseAsyn.bind(this)}>Increment async</button>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {num:state}
}

const mapDispatchProps = (dispatch) => {
  return {
    onIncreaseNum: (num) => dispatch(increaseNum(num)),
    onDecreaseNum: (num) => dispatch(decreaseNum(num))
  }
}

export default Counter = connect(mapStateProps, mapDispatchProps)(Counter);