// src/components/PageTransition.tsx
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

const variants = {
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  in:      { opacity: 1, y: 0,  filter: "blur(0px)" },
  out:     { opacity: 0, y: -16, filter: "blur(4px)" },
};

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="min-h-dvh"
    >
      {children}
    </motion.main>
  );
}