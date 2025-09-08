// src/components/Breadcrumbs.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={routeTo}> → {name.charAt(0).toUpperCase() + name.slice(1)}</span>
        ) : (
          <Link key={routeTo} to={routeTo}>
            {" "}→ {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
}
