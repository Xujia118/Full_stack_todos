import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddTask from "./AddTask";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import "./Task.css";

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
      <ul className="todos-menu">
        {taskList.map((task) => (
          <li className="menu-item" key={task.id}>
            <div className="title-container">
              <p className="task title">{task.title}</p>
              <div className="button-container">
                <button
                  className="menu-button"
                  onClick={() => {
                    navigate(`edit/${task.id}`, { state: { task } });
                  }}
                >
                  
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button
                  className="menu-button"
                  onClick={() => handleDelete(task.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            <p className="task content">{task.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
