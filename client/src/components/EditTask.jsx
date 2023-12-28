import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTask() {
  const location = useLocation();
  const task = location.state.task;
  const taskId = task.id;

  const navigate = useNavigate();

  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    content: task.content,
  });

  function handleEdit(e) {
    setUpdatedTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/tasks/${taskId}`, updatedTask);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={updatedTask.title}
          onChange={handleEdit}
        />

        <label htmlFor="content">Task description: </label>
        <input
          type="text"
          name="content"
          id="content"
          value={updatedTask.content}
          onChange={handleEdit}
        />

        <button>Update</button>
      </form>
    </div>
  );
}

export default EditTask;
