import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Nav(props) {
  // const { page, setPage, scrollToPage } = props;
  const { scrollToPage } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav>
      <button
        // className={`${page === "home" ? "Active" : ""}`}
        className={`${path === "/home" ? "Active" : ""}`}
        onClick={() => {
          // setPage("home");
          navigate("/home");
          scrollToPage();
        }}
      >
        Home
      </button>
      <button
        // className={`${page === "about" ? "Active" : ""}`}
        className={`${path === "/about" ? "Active" : ""}`}
        onClick={() => {
          navigate("/about");
          // setPage("about");
          scrollToPage();
        }}
      >
        About
      </button>

      <button
        // className={`${page === "projects" ? "Active" : ""}`}
        className={`${path === "/projects" ? "Active" : ""}`}
        onClick={() => {
          // setPage("projects");
          navigate("/projects");
          scrollToPage();
        }}
      >
        Projects
      </button>
      <button
        // className={`${page === "contact" ? "Active" : ""}`}
        className={`${path === "/contact" ? "Active" : ""}`}
        onClick={() => {
          // setPage("contact");
          navigate("/contact");
          scrollToPage();
        }}
      >
        Contact
      </button>
    </nav>
  );
}
export default Nav;
