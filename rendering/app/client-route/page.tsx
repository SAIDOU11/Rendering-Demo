"use client";

import React from "react";
import clientSideFunction from "@/utils/client-utils";
import { useTheme } from "@/components/theme-provider";

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div className="h-screen ">
      <h1 className="text-3xl font-bold text-blue-600">
        Client route {result}{" "}
      </h1>
    </div>
  );
};

export default ClientRoutePage;
