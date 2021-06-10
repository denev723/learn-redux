/* Action Type */
// Ducks pattern 사용시 다른 모듈과 액션 이름이 중복되는 것을 방지하기 위해
// 액션 이름에 접두사를 넣어줌

const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Action Type Creator */

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* Initial State */

const initialState = {
  number: 0,
  diff: 1,
};

/* Reducer */

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
}
