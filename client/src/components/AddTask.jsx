import React, { useState } from "react";
import axios from "axios";

import "./AddTask.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function handleAdd(e) {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/tasks", task);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>

        <input
          className="form-input"
          type="text"
          name="title"
          placeholder="Add Task"
          onChange={handleAdd}
        />

        <input
          className="form-input"
          type="text"
          name="content"
          placeholder="Add note"
          onChange={handleAdd}
        />

        <button className="form-button">
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
}

export default AddTask;
