import { motion } from "framer-motion";

export const WavyText = ({ text }: { text: string }) => {
  return (
    <div className="flex space-x-1">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }} // 위아래로 출렁
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1, // 글자마다 딜레이
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

