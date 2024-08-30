import React from "react";
import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

const InterleavingPage = () => {
  return (
    <div className="m-4">
      <h1 className="text-3xl text-bold mb-8">Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};

export default InterleavingPage;
