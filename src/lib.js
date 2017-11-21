import Validator from "validator";

export const isEmpty = obj => {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== "object") return true;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

export const validateTodo = data => {
  console.log(data);

  let errors = {};

  if (Validator.isEmpty(data.todoValue)) {
    errors.todoValue = "Can't pass null buddy !";
  }

  if (data.todoValue.length < 6) {
    errors.todoValue = "Todo needs to have more than 6 chars";
  }

  if (!Validator.isNumeric(data.codeValue)) {
    errors.codeValue = "Must be numbers";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const addTodo = ({ todoValue, codeValue, todos }) => {
  let len = todos.length - 1;
  let newId = todos[len] ? todos[len].id + 1 : 0;
  const newTodo = { id: newId, todo: todoValue, code: codeValue };
  return {
    todos: [...todos, newTodo],
    todoValue: "",
    codeValue: "",
    errors: {}
  };
};
