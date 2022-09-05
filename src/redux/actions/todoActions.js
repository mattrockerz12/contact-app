import { getTodos, saveTodo } from "../../services/todoService";
import * as types from "./actionTypes";

export const fetchTodos = () => async (dispatch) => {
  const { data } = await getTodos();

  dispatch({
    type: types.FETCH_TODOS_SUCCESS,
    payload: data,
  });
};

export const createTodo = (todo) => async (dispatch) => {
  const { data } = await saveTodo(todo);

  dispatch({
    type: types.CREATE_TODO_SUCCESS,
    payload: data,
  });
};
