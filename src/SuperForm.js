import React from "react";
import { TextField, RaisedButton } from "material-ui";

export default ({
  handleChange,
  handleSubmit,
  codeValue,
  todoValue,
  errors
}) => (
  <form
    onSubmit={handleSubmit}
    style={{ display: "flex", flexDirection: "column", paddingBottom: 20 }}
  >
    <TextField
      type="text"
      value={todoValue}
      onChange={handleChange}
      name="todoValue"
      inputStyle={{ color: "#859800" }}
      hintText="Todo field"
      hintStyle={{ color: "gray" }}
      errorText={errors.todoValue}
      fullWidth
    />
    <TextField
      type="text"
      value={codeValue}
      onChange={handleChange}
      name="codeValue"
      inputStyle={{ color: "#859800" }}
      hintText="Code field"
      hintStyle={{ color: "gray" }}
      errorText={errors.codeValue}
      fullWidth
    />
    <br />
    <RaisedButton type="submit">Submit</RaisedButton>
  </form>
);
