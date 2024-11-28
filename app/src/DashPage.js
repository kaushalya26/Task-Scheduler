import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

const DashPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Pending"); // Tab state

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px",
            backgroundColor: activeTab === "Pending" ? "#007bff" : "#ddd",
            color: activeTab === "Pending" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("Pending")}
        >
          Pending
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: activeTab === "In Progress" ? "#007bff" : "#ddd",
            color: activeTab === "In Progress" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("In Progress")}
        >
          In Progress
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: activeTab === "Completed" ? "#007bff" : "#ddd",
            color: activeTab === "Completed" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("Completed")}
        >
          Completed
        </button>
      </div>

      {/* Dashboard Component */}
      <Dashboard selectedDate={selectedDate} statusFilter={activeTab} />
    </div>
  );
};

export default DashPage;
