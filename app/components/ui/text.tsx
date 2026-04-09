import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight font-medium", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-2xl",
      h3: "text-lg",
      h4: "text-base",
    },
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof headingVariants> {}

function Heading({ className, variant, ...props }: HeadingProps) {
  const Comp = variant ?? "h1";

  return <Comp className={cn(headingVariants({ variant, className }))} {...props} />;
}

function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("", className)} {...props} />;
}

export { Heading, Paragraph };
