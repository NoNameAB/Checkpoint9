import React from "react";
import '../index.css'

export default props => (
  <div style={{ display: 'flex', justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
      className = "text"
    >
      {props.todo.text}
    </div>
    <button onClick={props.onDelete} className = "customBtn">x</button>
  </div>
);