// GradientShimmer.tsx
import { motion } from "framer-motion";

type Props = { text: string; className?: string };

export default function GradientShimmer({ text, className = "" }: Props) {
  return (
    <motion.span
      className={`relative inline-block bg-clip-text text-transparent 
      bg-[linear-gradient(90deg,#9333ea,40%,#22d3ee,60%,#9333ea)] 
      bg-[length:200%_100%] ${className}`}
      animate={{ backgroundPositionX: ["0%", "100%"] as any }}
      transition={{ duration: 2.2, repeat: Infinity }}
    >
      {text}
    </motion.span>
  );
}