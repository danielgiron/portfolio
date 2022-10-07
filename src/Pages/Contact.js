import React from "react";
import { motion } from "framer-motion";

function Contact(props) {
  return (
    <motion.div
      className="Contact Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        Thank you for your interest in reaching out! If you would like to
        collaborate on a project together, or if you're reaching about career
        opportunities, feel free to email me using the links below.
      </p>

      <a
        className="Mail Co"
        href="#"
        onClick={() => {
          window.location.href =
            "mailto:danielgiron96@gmail.com?subject=Let's Work Together!";
        }}
      >
        Let's Collaborate!
      </a>
      <a
        className="Mail Op"
        href="#"
        onClick={() => {
          window.location.href =
            "mailto:danielgiron96@gmail.com?subject=Career Opportunity";
        }}
      >
        Career Opportunity!
      </a>
    </motion.div>
  );
}
export default Contact;
