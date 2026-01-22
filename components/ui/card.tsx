import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function Card({ className, ref, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-none border border-black/10 bg-white shadow-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function CardContent({ className, ref, ...props }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />;
}

export { Card, CardContent };
