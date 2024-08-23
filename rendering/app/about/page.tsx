"use client";
import React, { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  console.log("About client component using 'use client' ");
  return (
    <div className="m-4 h-screen">
      <h1 className="text-3xl font-bold">About page -- (HOURS)</h1>
    </div>
  );
};

export default About;
