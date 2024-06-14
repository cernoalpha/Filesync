import { motion } from "framer-motion";
import { FC } from "react";

interface MotionTextProps {
  children: string;
  delayOffset?: number;
}

const MotionText: FC<MotionTextProps> = ({ children, delayOffset = 0 }) => {
  // Split text into individual characters
  const letters = children.split("").map((char) =>
    char === " " ? "\u00A0" : char
  );

  return (
    <motion.div>
        
      {letters.map((letter, index) => (
        <motion.span
          className="inline-flex"
          key={index}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.03 + delayOffset,
            type: "spring",
            damping: 15,
            stiffness: 400,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default MotionText;
