import { type ComponentProps, useRef } from "react";

import { type MotionValue, motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export function AnimatedText({ children, className, ...props }: ComponentProps<"p">) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.35"],
  });

  if (typeof children !== "string") return children;

  const words = children.split(" ");

  return (
    <p ref={container} className={cn("flex flex-wrap", className)} {...props}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-2">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const colorInitial = "var(--color-primary)";
  const colorFinal = "var(--color-foreground)";
  const { color, opacity } = useTransform(progress, range, {
    color: [colorInitial, colorFinal],
    opacity: [0.2, 1],
  });

  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{
          opacity: opacity,
          color: color,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
