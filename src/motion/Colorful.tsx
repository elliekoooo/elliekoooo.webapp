import { motion } from "framer-motion";

type prop = {
    text: string
}

export const ColorfulText = ({text}: prop) => {
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#C77DFF"];

  return (
    <div className="flex gap-1 font-bold">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{
            color: colors, // 여러 색을 순환
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: i * 0.1, // 글자별 시간차
          }}
        >
        {char}
        </motion.span>
      ))}
    </div>
  );
}