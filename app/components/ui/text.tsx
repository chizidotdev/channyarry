import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight font-medium", {
  variants: {
    variant: {
      h1: "text-[clamp(3.5rem,3vw+1rem,7.5rem)] leading-none font-serif",
      h2: "text-2xl md:text-4xl",
      h3: "text-xl md:text-2xl",
    },
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof headingVariants> {}

function Heading({ className, variant = "h1", ...props }: HeadingProps) {
  const Comp = variant ?? "h1";

  return <Comp className={cn(headingVariants({ variant, className }))} {...props} />;
}

function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xl", className)} {...props} />;
}

export { Heading, Paragraph };
