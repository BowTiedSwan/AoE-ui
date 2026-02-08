import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

import "@/components/ui/warcraftcn/styles/warcraft.css";

const buttonVariants = cva(
  "fantasy inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium text-sm outline-none transition-all duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.97] active:brightness-90",
  {
    variants: {
      variant: {
        default:
          "text-amber-100 tracking-wide uppercase transition-shadow",
        frame:
          "text-amber-100 tracking-wide uppercase transition-shadow",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  style,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const bgClass =
    variant === "frame"
      ? size === "sm"
        ? "aoe-btn-bg-frame-sm"
        : "aoe-btn-bg-frame"
      : size === "sm"
      ? "aoe-btn-bg-sm"
      : "aoe-btn-bg";

  const sizeClass = () => {

    if(variant === "frame") {
      return size === "sm" ? "w-80 h-26" : "w-120 h-24";
    }
    return size === "sm" ? "w-60 h-17" : "w-104 h-16";
  }

  return(
    <Comp
      className={cn(
        buttonVariants({ variant, size }),
        bgClass,
        sizeClass(),
        className
      )}
      style={style}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
