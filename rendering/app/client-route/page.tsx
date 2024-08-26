"use client";
import serverSideFunction from "@/utils/server-utils";

const ClientRoutePage = () => {
  console.log("Client route rendered");

  const result = serverSideFunction();
  return (
    <div>
      <h1 className="text-3xl font-bold">Client Route Page</h1>
      <p>{result}</p>
    </div>
  );
};

export default ClientRoutePage;
