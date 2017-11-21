import React from "react";
import { validateTodo } from "../lib";
import JSONTree from "react-json-tree";
import { connect } from "react-redux";
import SuperForm from "../SuperForm";

const ReduxState = ({ todos, dispatch }) => {
  const AddTodoAction = e => {
    e.preventDefault();

    const { errors, isValid } = validateTodo(todos);

    if (isValid) {
      dispatch({ type: "TODO_ADD" });
    } else {
      dispatch({ type: "TODO_ERROR", errors });
    }
  };

  const UpdateTodoAction = e => {
    const { name, value } = e.target;
    const payload = { name, value };
    dispatch({ type: "TODO_UPDATE", payload });
  };

  return (
    <div className="redux-state">
      <h1 className="comp-title">Redux State Management</h1>
      <SuperForm
        handleChange={UpdateTodoAction}
        todoValue={todos.todoValue}
        codeValue={todos.codeValue}
        handleSubmit={AddTodoAction}
        errors={todos.errors}
      />
      <JSONTree data={todos} />
    </div>
  );
};

export default connect(state => state)(ReduxState);
