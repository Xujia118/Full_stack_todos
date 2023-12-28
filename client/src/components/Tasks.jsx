import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddTask from "./AddTask";

function Tasks() {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTaskList() {
      try {
        const res = await axios.get("http://localhost:3001/tasks");
        setTaskList(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getTaskList();
  }, []);

  async function handleDelete(taskId) {
    try {
      await axios.delete(`http://localhost:3001/tasks/${taskId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <AddTask />
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.content}
            <button
              onClick={() => {
                navigate(`edit/${task.id}`, { state: { task } });
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
