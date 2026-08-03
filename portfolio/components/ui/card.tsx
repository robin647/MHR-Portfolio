import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass gradient-border rounded-xl2 p-6 transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
