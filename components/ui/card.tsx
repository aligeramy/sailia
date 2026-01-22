import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function Card({ className, ref, ...props }: CardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-none border border-black/10 bg-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function CardContent({ className, ref, ...props }: CardContentProps) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
}

export { Card, CardContent };
