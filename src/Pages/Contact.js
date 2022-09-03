import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Contact(props) {
  return (
    <motion.div
      className="Contact Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact</h1>
    </motion.div>
  );
}
export default Contact;
