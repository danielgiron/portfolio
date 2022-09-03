import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import "./Home.css";

function Home(props) {
  return (
    <motion.div
      className="Home Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Home
    </motion.div>
  );
}
export default Home;
