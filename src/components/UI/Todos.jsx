/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

import Todo from "../Todos/Todo";
import AddTodo from "./AddTodo";

import "./Todos.css";

import store from "../../store/index";

const Todos = (props) => {
  const [todoList, setTodoList] = useState(store.todoList);
  const [showModal, setShowModal] = useState(false);

  const addTodo = (todo) => {
    if (props.activeTabName === undefined) return;
    setTodoList([...todoList, todo]);

    store.todoList.push(todo);
  };

  const deleteTodo = (todo) => {
    setTodoList(todoList.filter((todoItem) => todoItem !== todo));

    store.todoList = todoList.filter((todoItem) => todoItem !== todo);
  };

  const changeShowModal = () => {
    if (props.activeTabName === undefined) {
      alert("Please select a tab first");
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="todos-container">
        <div className="todo-container" onClick={changeShowModal}>
          <IoAdd className="add-todo-icon" />
        </div>
        {todoList.map((todo, index) => {
          if (todo.TabName === props.activeTabName) {
            return <Todo key={index} todo={todo} deleteTodo={deleteTodo} />;
          }
        })}
      </div>
      {showModal && (
        <AddTodo
          todoList={todoList}
          addTodo={addTodo}
          setShowModal={setShowModal}
          activeTabName={props.activeTabName}
        />
      )}
    </>
  );
};

export default Todos;
