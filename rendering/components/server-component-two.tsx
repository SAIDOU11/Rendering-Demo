import React from "react";
import fs from "fs";

const ServerComponentTwo = () => {
  fs.readFileSync("components/server-component-two.tsx", "utf-8");
  return (
    <div>
      <h1 className="text-3xl font-bold">Server Component Two</h1>
    </div>
  );
};

export default ServerComponentTwo;
