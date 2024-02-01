import React, { useState } from "react";
import Styles from "../components/Input.module.css";

function Input({ addButton }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const getTaskTitle = (event) => {
    setTaskTitle(event.target.value);
  };

  const getTaskDate = (event) => {
    console.log(event);
    setTaskDate(event.target.value);
  };

  const handleAddButton = () => {
    addButton(taskTitle, taskDate);
    setTaskTitle("");
    setTaskDate("");
  };

  return (
    <div className="container text-center ">
      <div className="row row-cols-4 flex justify-center">
        <input
          id="text"
          type="text"
          placeholder="Enter your task"
          className={Styles.text}
          onChange={getTaskTitle}
          value={taskTitle}
        />
        <input
          type="date"
          className={Styles.date}
          onChange={getTaskDate}
          value={taskDate}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
