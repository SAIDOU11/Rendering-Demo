"use client";
import React, { useState } from "react";

const ClientComponentTwo = () => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      <h1 className="text-3xl font-bold">Client Component Two</h1>
    </div>
  );
};

export default ClientComponentTwo;
