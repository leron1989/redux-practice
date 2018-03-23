export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increaseNum = (num) => {
  return {
    type: INCREASE,
    num
  }
}

export const decreaseNum = (num) => {
  return {
    type: DECREASE,
    num
  }
}