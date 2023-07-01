import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

const Todo: React.FC = () => {
  return (
    <div className="todo-container">
      <ol>
        <TodoItem title="Eat"/>
        <TodoItem title="Code"/>
        <TodoItem title="Sleep"/>
        <TodoItem title="Repeat"/>
      </ol>
    </div>
  );
};

export default Todo;
