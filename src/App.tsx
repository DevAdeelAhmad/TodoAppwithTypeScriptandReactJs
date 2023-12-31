import React  from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myTodoItems = [
  {
    id: 1,
    title: "Finish Homework",
  },
  {
    id: 2,
    title: "Eat Dinner and Spend Time with Family",
  },
  {
    id: 3,
    title: "Code, Sleep and Repeat",
  },
];

const App: React.FC = () => {
  return (
    <div>
      {/* <Todo items={myTodoItems} /> */}
      <Counter/>
    </div>
  );
};

export default App;
