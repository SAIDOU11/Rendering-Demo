import React from "react";
import fs from "fs";

const ServerComponentOne = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h1 className="text-3xl font-bold">Server Component One</h1>
    </div>
  );
};

export default ServerComponentOne;
