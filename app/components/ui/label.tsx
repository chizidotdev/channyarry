import { cn } from "@/lib/utils";

export function Label({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("font-serif text-2xl", className)} {...props}>
      <span className="text-primary font-medium">[&nbsp;</span>
      {children}
      <span className="text-primary font-medium">&nbsp;]</span>
    </p>
  );
}
