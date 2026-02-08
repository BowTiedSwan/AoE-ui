import type * as React from "react";

import { cn } from "@/lib/utils";

import "@/components/ui/warcraftcn/styles/warcraft.css";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="fantasy w-100 h-18 flex items-center justify-center rounded-sm p-4 aoe-input-bg">
        <input
        className={cn(
            "h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base text-amber-100 shadow-xs outline-none transition-[color,box-shadow] selection:bg-amber-900/50 selection:text-amber-100 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-amber-100 file:text-sm placeholder:text-amber-200/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
        )}
        data-slot="input"
        type={type}
        {...props}
        />
    </div>
  );
}

export { Input };
