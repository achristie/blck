import { Button } from "@components/common";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    color: "cornflowerblue",
    transition: {
      type: "spring",
      when: "beforeChildren",
      delay: ".05",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vh",
    color: "red",
    transition: {
      duration: 4,
    },
  },
};
export default function Animations() {
  const [show, setShow] = useState(true);

  setTimeout(() => setShow(false), 4000);

  return (
    <>
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Welcome to Pizza Joint
      </motion.h2>
      <motion.div
        initial={{ y: -250, x: 0, opacity: 0 }}
        animate={{ y: 200, opacity: 1, x: 200 }}
      >
        <Button>Click Here!@</Button>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255,255)" }}
      >
        another
      </motion.button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Thanks :D</h1>
        <motion.p variants={childVariants}>You ordered a pizza!</motion.p>
      </motion.div>
      <AnimatePresence>
        {show && (
          <motion.h2 variants={childVariants}>Should go bye bye!</motion.h2>
        )}
      </AnimatePresence>
    </>
  );
}
