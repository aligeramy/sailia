import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function Separator({ className, ref, ...props }: SeparatorProps) {
  return (
    <div
      ref={ref}
      className={cn("h-px w-full bg-black/10", className)}
      {...props}
    />
  );
}

export { Separator };
