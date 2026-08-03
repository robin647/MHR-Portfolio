import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-signal/25 bg-signal/[0.07] px-3 py-1 font-mono text-xs text-signal",
        className
      )}
      {...props}
    />
  );
}
