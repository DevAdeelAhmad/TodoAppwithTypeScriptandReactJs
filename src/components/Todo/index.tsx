import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

interface ITodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  items: ITodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map(({id , title}) => (
          <TodoItem key={id} title={title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
