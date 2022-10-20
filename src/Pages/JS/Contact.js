import React from "react";
import { motion } from "framer-motion";
import "../CSS/Contact.css";

function Contact(props) {
  const encEmail = "ZGFuaWVsZ2lyb245NkBnbWFpbC5jb20=";

  return (
    <motion.div
      className="Contact Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <p>
          Thank you for your interest in reaching out! If you would like to
          collaborate on a project together, or if you're reaching about career
          opportunities, feel free to email me using the links below.
        </p>

        <div className="ContactButtons">
          <a
            className="Mail Co"
            onClick={() => {
              window.location.href = `mailto:${atob(
                encEmail
              )}?subject=Let's Collaborate!`;
            }}
          >
            Let's Collaborate!
          </a>
          <a
            className="Mail Op"
            onClick={() => {
              window.location.href = `mailto:${atob(
                encEmail
              )}?subject=Career Opportunity`;
            }}
          >
            Career Opportunity!
          </a>
        </div>
      </section>
    </motion.div>
  );
}
export default Contact;
