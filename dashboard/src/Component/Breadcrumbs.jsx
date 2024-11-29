import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const med = location.pathname
    .split("/")
    .filter((location) => {
      return location !== "";
    })
    .map((items, index) => { 
      return (
        <NavLink 
          key={index} 
          to={items}
          className="inline-flex after:content-['>'] after:text-neutral-500 after:mx-2 last:after:hidden font-medium text-md capitalize dark:text-white"
        >
          {items}
        </NavLink>
      );
    });

  return <div className="flex items-center h-16 w-fit ml-4">{med}</div>;
}

export default Breadcrumbs;