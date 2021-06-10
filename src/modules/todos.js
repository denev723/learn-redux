/* Action Type */

const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

/* Action Type Creator */

let nextId = 1; // todo data에서 사용 할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/* Initial State */
// initial state는 꼭 object일 필요는 없고 배열, 원시타입이여도 상관 없음

const initialState = [];

/* Reducer */

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}
