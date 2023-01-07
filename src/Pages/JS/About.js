import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <motion.div
      className="About Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <div className="Header">About Daniel (That's me!)</div>
        <p>
          Throughout my portfolio you might see screenshots with my name listed
          as Daniel—this is no mistake! I typically go by my middle name but
          referring to me by my first name (Baldwin) is perfectly fine.
        </p>
        <p>
          I am from New York City. I am a parent to a lovely cat, Irina, who I
          adore very much. Some topics of interest of mine are cooking/baking,
          arts/crafting, woodworking, 3D modeling/printing,
          sculpting/casting—just about anything that allows me to create, either
          functionally useful items or as a form of self-expression.
        </p>
        <p>
          In general, I have always enjoyed the act of breaking something down,
          taking it apart, and seeing what makes said thing be "The Thing" that
          it is. I especially like being able to build something back together
          again in a way that makes it more my own. A sort of balance between
          being a tinkerer and an artist.
        </p>
        <p>
          I graduated from Syracuse University, earning a B.S. in Computer
          Science. I was able to explore different areas in CS, ultimately
          deciding Full Stack Software Development is what appeals to me most; I
          get to work on more functional code in the backend, while working on
          visual elements and design in the frontend.
        </p>
      </section>
    </motion.div>
  );
}
export default About;
