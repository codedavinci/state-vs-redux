import { combineReducers } from "redux";
import { addTodo } from "../lib";

const initialState = {
  todoValue: "",
  codeValue: "",
  todos: [],
  errors: {}
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return {
        ...initialState,
        todos: [...state.todos, ...addTodo(state).todos]
      };
    case "TODO_UPDATE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case "TODO_ERROR":
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default combineReducers({ todos: todoReducer });
