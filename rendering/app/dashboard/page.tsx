"use client";
import React, { useState } from "react";

const DashboardPage = () => {
  console.log("Dashboard component");

  const [name, setName] = useState("");
  return (
    <div className="h-screen m-4">
      <h1 className="font-bold text-3xl mb-4">DashboardPage</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default DashboardPage;
