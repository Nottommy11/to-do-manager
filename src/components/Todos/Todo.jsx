/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsTrash, BsTrashFill } from "react-icons/bs";
import { AiOutlineSetting, AiFillSetting } from "react-icons/ai";

import youtubeImg from "../../../public/youtube.jpg";

const Todo = (props) => {
  const [settingsHover, setSettingsHover] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);

  return (
    <div className="todo-container">
      <div className="todo-content">
        <a
          href={props.todo.Link}
          target="_blank"
          rel="noreferrer"
          className="todo-img-link"
        >
          <img src={youtubeImg} alt="Todo img" className="todo-img" />
        </a>
        <div className="todo-text">
          <div className="todo-title"> {props.todo.Name}</div>
          <div className="todo-description">{props.todo.Description}</div>
        </div>
      </div>
      <div className="todo-edit">
        <div
          className="todo-settings-icon-container"
          onMouseEnter={() => setSettingsHover(true)}
          onMouseLeave={() => setSettingsHover(false)}
        >
          {settingsHover ? (
            <AiFillSetting className="todo-settings-icon" />
          ) : (
            <AiOutlineSetting className="todo-settings-icon" />
          )}
        </div>
        <div
          className="todo-delete-icon-container"
          onMouseEnter={() => setDeleteHover(true)}
          onMouseLeave={() => setDeleteHover(false)}
        >
          {deleteHover ? (
            <BsTrashFill className="todo-delete-icon" />
          ) : (
            <BsTrash className="todo-delete-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
