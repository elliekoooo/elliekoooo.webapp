import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type prop = {
  active: boolean
} & PropsWithChildren

export default function Wiper({ children, active }: prop) {
  return (
    <div>
      <motion.div
        animate={{ 
          rotate: active ?  [-2, 2, -2] : [0]
        }}
        transition={{ 
          duration: 1,  // 왕복 시간
          repeat: Infinity, // 무한 반복
          ease: "easeInOut" 
        }}
      >
        { children }
      </motion.div>
    </div>
  );
}