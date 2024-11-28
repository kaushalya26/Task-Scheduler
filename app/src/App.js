import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task from "./pages/Task";
import Reminder from "./pages/Reminder";
import "./App.css";
import DashPage from "./DashPage";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <h1>Task Scheduler</h1>
          <Link to="/task">Tasks</Link>
          <Link to="Dashboard">Dashboard</Link>
          <Link to="/reminder">Reminders</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/task" element={<Task />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/Dashpage" element={<DashPage/>}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
