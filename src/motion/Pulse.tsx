import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
};

export function Pulse({ children }: props) {
  return (
        <motion.div
        initial={{ scale: 1, boxShadow: "0 0 0px rgba(99,102,241,0.0)" }}
        whileHover={{
            scale: [1, 1.03, 1],
            transition: { duration: 0.8, repeat: 0 }
          }}
        className="inline-flex rounded-2xl"
        >
            {children}
        </motion.div>
  );
}
