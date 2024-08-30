"use client";
import React, { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  console.log(`NavSearch rendered`);
  return (
    <div>
      <h1 className="text-3xl font-bold">Nav Search</h1>
    </div>
  );
};

export default NavSearch;
