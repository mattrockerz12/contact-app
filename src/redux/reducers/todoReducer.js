import * as types from "../actions/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return action.payload;
    case types.CREATE_TODO_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default todoReducer;
