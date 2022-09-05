import http from "./httpService";

const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";

const todoUrl = (id) => {
  return `${apiEndpoint}/${id}`;
};

export const getTodos = () => {
  return http.get(apiEndpoint);
};

export const getTodo = (todoId) => {
  return http.get(todoUrl(todoId));
};

export const saveTodo = (todo) => {
  return http.post(apiEndpoint, todo);
};

export const editTodo = (todoId, todo) => {
  const body = { ...todo };
  delete body.id;
  return http.put(todoUrl(todoId), body);
};
