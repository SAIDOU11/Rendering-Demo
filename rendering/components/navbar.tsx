import React, { useState } from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
