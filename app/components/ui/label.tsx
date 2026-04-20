import { cn } from "@/lib/utils";

export function Label({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-lg uppercase", className)} {...props}>
      <span className="text-primary font-medium">[&nbsp;</span>
      {children}
      <span className="text-primary font-medium">&nbsp;]</span>
    </p>
  );
}
