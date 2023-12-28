import React, { useState } from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task: </label>
        <input type="text" name="title" id="title" onChange={handleAdd} />

        <label htmlFor="content">Task description: </label>
        <input type="text" name="content" id="content" onChange={handleAdd} />

        <button>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
