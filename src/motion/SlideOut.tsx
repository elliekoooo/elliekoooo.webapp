import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function SlideIn({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }} // 시작 위치: 왼쪽 바깥, 투명
      animate={{ x: 0, opacity: 1 }}    // 도착 위치: 원래 자리, 불투명
      transition={{ duration: 0.6, ease: "easeOut" }} // 애니메이션 속성
      className=" "
    >
      { children }
    </motion.div>
  );
}