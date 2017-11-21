import React, { Component } from "react";
import JSONTree from "react-json-tree";
import { addTodo, validateTodo } from "../lib";
import SuperForm from "../SuperForm";

class InternalState extends Component {
  state = {
    todoValue: "",
    codeValue: "",
    todos: [],
    errors: {}
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAdd = e => {
    e.preventDefault();
    const { errors, isValid } = validateTodo(this.state);

    if (isValid) {
      this.setState(addTodo);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { todoValue, codeValue, errors } = this.state;

    return (
      <div className="internal-state">
        <h1 className="comp-title">Internal State Management</h1>
        <SuperForm
          todoValue={todoValue}
          codeValue={codeValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleAdd}
          errors={errors}
        />
        <JSONTree data={this.state} />
      </div>
    );
  }
}

export default InternalState;
