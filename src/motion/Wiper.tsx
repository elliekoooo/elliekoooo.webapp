import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Wiper({ children }: PropsWithChildren) {
  return (
    <div className="hover:">
      <motion.div
        animate={{ 
          rotate: [-1, 1, -1] 
        }}
        transition={{ 
          duration: 1,  // 왕복 시간
          repeat: Infinity, // 무한 반복
          ease: "easeInOut" 
        }}
        className=""
      >
        { children }
      </motion.div>
    </div>
  );
}