import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "h-fit w-full min-w-0 rounded-ds-control border border-input bg-transparent px-ds-pd-control-x py-ds-pd-control-y text-ds-size-control-medium transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      visualSize: {
        tiny: "text-ds-size-control-tiny",
        small: "text-ds-size-control-small",
        medium: "text-ds-size-control-medium",
        large: "text-ds-size-control-large",
      },
    },
  },
);

export type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants>;

function Input({
  className,
  type,
  visualSize = "medium",
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ className, visualSize }))}
      {...props}
    />
  );
}

export { Input };
