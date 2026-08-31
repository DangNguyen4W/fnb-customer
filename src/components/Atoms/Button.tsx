import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-ds-control group/button font-ds-family-primary border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ds-cl-bg-brand-primary-main active:bg-ds-cl-bg-brand-primary-pressed text-ds-cl-text-brand-primary-contrast hover:bg-ds-cl-bg-brand-primary-main aria-expanded:bg-ds-cl-bg-brand-primary-pressed",
        outline:
          "border border-ds-cl-border-brand-primary-main text-ds-cl-text-brand-primary-main hover:text-ds-cl-text-brand-primary-hover aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-ds-cl-bg-brand-secondary-main active:bg-ds-cl-bg-brand-secondary-pressed text-ds-cl-text-brand-secondary-contrast hover:bg-ds-cl-bg-brand-secondary-main aria-expanded:bg-ds-cl-bg-brand-secondary-pressed",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      layout: {
        default: "",
        icon: "",
      },
      fullWidth: {
        true: "w-full",
      },
      // in-data-[slot=button-group]:rounded-ds-control-tiny
      size: {
        default: [
          "data-[layout=icon]:p-ds-pd-control",
          "gap-1 text-ds-size-action-medium font-ds-w-medium px-ds-pd-control-x py-ds-pd-control-y [&_svg:not([class*='size-'])]:size-5",
        ],
        xs: [
          "data-[layout=icon]:p-ds-pd-control-tiny",
          "gap-1 text-ds-size-action-medium font-ds-w-medium px-ds-pd-control-x-tiny py-ds-pd-control-y-tiny [&_svg:not([class*='size-'])]:size-3",
        ],
        sm: [
          "data-[layout=icon]:p-ds-pd-control-x-sm",
          "gap-1 text-ds-size-action-medium font-ds-w-medium px-ds-pd-control-x-sm py-ds-pd-control-y-sm [&_svg:not([class*='size-'])]:size-4",
        ],
        lg: [
          "data-[layout=icon]:p-ds-pd-control-lg",
          "gap-1 text-ds-size-action-medium font-ds-w-medium px-ds-pd-control-x-lg py-ds-pd-control-y-lg [&_svg:not([class*='size-'])]:size-6",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonPrimitive.Props & {
  fullWidth?: boolean;
} & Omit<VariantProps<typeof buttonVariants>, "width">;

function Button({
  className,
  variant = "default",
  size = "default",
  layout = "default",
  fullWidth,
  ...rest
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-layout={layout}
      className={cn(
        buttonVariants({
          variant,
          size,
          layout,
          className,
          fullWidth,
        }),
      )}
      {...rest}
    />
  );
}

export { Button, buttonVariants };
