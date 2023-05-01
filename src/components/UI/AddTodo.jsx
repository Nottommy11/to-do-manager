/* eslint-disable react/prop-types */
import { useState } from "react";

import "./addTodo.css";

import youtubeImg from "../../../public/youtube.jpg";

const AddTodo = (props) => {
  const [todoLink, setTodoLink] = useState("");
  const [todoImg, setTodoImg] = useState(youtubeImg);
  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleAutofill = (event) => {
    if (event.target.checked) {
      setTodoImg(youtubeImg);
      setTodoName(todoLink);
      setTodoDesc(todoLink);
    } else {
      setTodoImg(youtubeImg);
      setTodoName("");
      setTodoDesc("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTodoImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoLink !== "" && todoName !== "") {
      props.addTodo({
        TabName: props.activeTabName,
        Link: todoLink,
        Img: todoImg,
        Name: todoName,
        Desc: todoDesc,
      });
      setTodoLink("");
      setTodoImg("");
      setTodoName("");
      setTodoDesc("");
      props.setShowModal(false);
    }
  };

  return (
    <>
      <div
        className="todo-modal-bg"
        onClick={() => props.setShowModal(false)}
      />
      <div className="todo-modal-container">
        <form className="todo-modal" onSubmit={handleSubmit}>
          <div className="todo-modal-title">Add Todo</div>
          <input
            className="todo-modal-link-input"
            type="url"
            required
            placeholder="https://example.com"
            value={todoLink}
            onChange={(e) => setTodoLink(e.target.value)}
          />
          <div className="todo-modal-autofill-wrapper">
            <input
              type="checkbox"
              className="todo-modal-autofill"
              onChange={handleAutofill}
            />
            <label
              htmlFor="todo-modal-autofill"
              className="todo-modal-autofill-label"
            >
              Autofill
            </label>
          </div>
          <input
            type="file"
            className="todo-modal-file"
            accept=".png, .jpg, .jpeg, .gif"
            onChange={handleFileUpload}
          />
          <img src={todoImg} className="todo-img-preview" />
          <input
            className="todo-modal-name-input"
            type="text"
            required
            placeholder="Tab Name"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <textarea
            className="todo-modal-desc-input"
            type="text"
            placeholder="Description"
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
          <button className="todo-modal-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
