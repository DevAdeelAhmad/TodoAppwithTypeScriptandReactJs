import React from "react";
import "./style.css";
interface TodoItemProps{
  // title?: String;    its by-default required but if you add "?" then optional
  title: String; //it will be required
}

const TodoItem: React.FC<TodoItemProps> = ({title}) => {  
  return <li>{title}</li>;
};

export default TodoItem;
