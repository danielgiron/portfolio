import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Projects(props) {
  return (
    <motion.div
      className="Projects Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Projects
    </motion.div>
  );
}
export default Projects;
