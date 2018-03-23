import {
  INCREASE, 
  DECREASE} from '../actions/counter';

export const reducers = (state = 0, action) => {
  switch(action.type){
    case INCREASE:
      return state + action.num;
    case DECREASE:
      return state - action.num;
    default:
      return state;
  }
}