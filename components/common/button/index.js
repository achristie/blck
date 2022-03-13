import { Loader } from "@components/common";

import { motion } from "framer-motion";

export default function Button({ children, onClick, disabled, success }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md text-xl border group font-medium bg-indigo-700 text-white 
         py-2 px-6 inline-flex items-center "
    >
      {children}

      {disabled ? (
        <motion.div
          className="ml-4"
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <Loader />
        </motion.div>
      ) : (
        ""
      )}
    </button>
  );
}
