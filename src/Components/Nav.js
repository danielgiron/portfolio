import React from "react";

function Nav(props) {
  const { page, setPage, scrollToPage } = props;
  return (
    <nav>
      <button
        className={`${page === "home" ? "Active" : ""}`}
        onClick={() => {
          setPage("home");
          scrollToPage();
        }}
      >
        Home
      </button>
      <button
        className={`${page === "about" ? "Active" : ""}`}
        onClick={() => {
          setPage("about");
          scrollToPage();
        }}
      >
        About
      </button>

      <button
        className={`${page === "projects" ? "Active" : ""}`}
        onClick={() => {
          setPage("projects");
          scrollToPage();
        }}
      >
        Projects
      </button>
      <button
        className={`${page === "contact" ? "Active" : ""}`}
        onClick={() => {
          setPage("contact");
          scrollToPage();
        }}
      >
        Contact
      </button>
    </nav>
  );
}
export default Nav;
