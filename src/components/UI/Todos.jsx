/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

import Todo from "../Todos/Todo";
import "./Todos.css";

import store from "../../store/index";

const Todos = (props) => {
  const [todoList, setTodoList] = useState(store.todoList);

  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        TabName: props.activeTabName,
        Name: "New Todo",
        Description: "New Todo Description",
        Completed: false,
        Link: "https://www.google.com",
      },
    ]);
    store.todoList.push({
      TabName: props.activeTabName,
      Name: "New Todo",
      Description: "New Todo Description",
      Completed: false,
      Link: "https://www.google.com",
    });
  };

  return (
    <div className="todos-container">
      <div className="todo-container" onClick={addTodo}>
        <IoAdd className="add-todo-icon" />
      </div>
      {todoList.map((todo, index) => {
        if (todo.TabName === props.activeTabName) {
          return <Todo key={index} todo={todo} />;
        }
      })}
    </div>
  );
};

export default Todos;
