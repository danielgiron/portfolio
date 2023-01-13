import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Nav(props) {
  const { scrollToPage } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav>
      <div className="Name">Baldwin Giron</div>
      <button
        className={`${path === "/home" || path === "/" ? "Active" : ""}`}
        onClick={() => {
          navigate("/home");
          setTimeout(() => {
            scrollToPage();
          }, 50);
        }}
      >
        Home
      </button>
      <button
        className={`${path === "/about" ? "Active" : ""}`}
        onClick={() => {
          navigate("/about");

          setTimeout(() => {
            scrollToPage();
          }, 50);
        }}
      >
        About
      </button>

      <button
        className={`${path === "/projects" ? "Active" : ""}`}
        onClick={() => {
          navigate("/projects");
          setTimeout(() => {
            scrollToPage();
          }, 50);
        }}
      >
        Projects
      </button>
      <button
        className={`${path === "/contact" ? "Active" : ""}`}
        onClick={() => {
          navigate("/contact");
          setTimeout(() => {
            scrollToPage();
          }, 50);
        }}
      >
        Contact
      </button>
    </nav>
  );
}
export default Nav;
