import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/tasks" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
