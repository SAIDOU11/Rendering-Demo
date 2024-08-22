"use client";
import React, { useState } from "react";

const Dashboard = () => {
  console.log("Dashboard client component");
  const [name, setName] = useState("");
  return (
    <div className="m-4 h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <input
        className="mt-4 mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Dashboard;
