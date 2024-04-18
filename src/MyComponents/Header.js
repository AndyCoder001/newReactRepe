import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
     <div className="navbar">
        <a className="active" href="../App.js">Home</a>
        <a href="../pages/blog.js">Blog</a>
        <a href="">Contact</a>
     </div>
    </>
  );
}
