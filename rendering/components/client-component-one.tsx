"use client";
import React, { useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      <h1 className="text-3xl font-bold">Client Component One</h1>
      {children}
    </div>
  );
};

export default ClientComponentOne;
