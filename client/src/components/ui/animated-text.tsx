import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface AnimatedTextStaggerProps {
  children: ReactNode[];
  className?: string;
  containerClassName?: string;
  staggerChildren?: number;
  initialDelay?: number;
}

export const AnimatedText: FC<AnimatedTextProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const animation = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedTextStagger: FC<AnimatedTextStaggerProps> = ({
  children,
  className = "",
  containerClassName = "",
  staggerChildren = 0.2,
  initialDelay = 0
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: initialDelay
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className={containerClassName}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children.map((child, index) => (
        <motion.div key={index} className={className} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
