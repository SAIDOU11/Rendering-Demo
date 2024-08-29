"use client";

import React from "react";
import { useTheme } from "@/components/theme-provider";
import ClientSideFunction from "@/utils/client-utils";

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = ClientSideFunction();

  return (
    <div className="h-screen ">
      <h1 className="text-3xl font-bold text-blue-600">
        Client route {result}
      </h1>
    </div>
  );
};

export default ClientRoutePage;
