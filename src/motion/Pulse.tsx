import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
};

export function Pulse({ children }: props) {
  return (
        <motion.div
        initial={{ scale: 1, boxShadow: "0 0 0px rgba(99,102,241,0.0)" }}
        animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
            "0 0 0px rgba(99,102,241,0.0)",
            "0 0 24px rgba(99,102,241,0.45)",
            "0 0 0px rgba(99,102,241,0.0)",
            ],
        }}
        whileHover={{
            scale: [1, 1.03, 1],
            transition: { duration: 0.8, repeat: 0 }
          }}
        transition={{ duration: 1.4, repeat: 0, ease: "easeInOut" }}
        className="inline-flex rounded-2xl"
        >
            {children}
        </motion.div>
  );
}
