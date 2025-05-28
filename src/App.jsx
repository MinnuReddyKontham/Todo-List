import React from "react";
import Name from "./components/name";
import Heading from "./components/heading";
import Todo from "./components/Todo-item";
import "./name.css";
import TodoItems from "./components/todoitems";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const todoitems = [
    {
      name: "complete react",
      duedate: "24/5/2005",
    },
    {
      name: "start node",
      duedate: "25/5/2005",
    },
    {
      name: "complete node",
      duedate: "26/05/2005",
    },
  ];
  const [items, setItems] = useState([]);
  const handleOnClick = (name, duedate) => {
    setItems((currvalue) => {
      const newItems = [...currvalue, { name: name, duedate: duedate }];
      return newItems;
      //handle on click lo pass chesin arguments : deeni tarvata rayali
  
      // const newItems = [...items, { name: name, duedate: duedate }];
      //  handle on click lo pass chesin arguments : deeni tarvata rayali //deeni badulu we can define a function setitems and pass that in new items and return that
      //  setItems(newItems);
    });
  };
  const handleDeleteButton = (todoName) => {
    const newTodo = items.filter((item) => item.name !== todoName);
    setItems(newTodo);
  };

  return (
    <div className="main">
      <Name />
      <Heading clickEvent={handleOnClick}></Heading>
      <Welcome items={items}></Welcome>
      <TodoItems items={items} onDelete={handleDeleteButton}></TodoItems>
    </div>
  );
}

export default App;
