import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Купить кушоц" },
    { id: 2, completed: false, title: "Купить 2" },
    { id: 3, completed: false, title: "Купить 3" }
  ];
  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
