import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";

export const Position = {
  AbsoluteCenter: "absolute-center",
  FixedTopCenter: "fixed-top-center",
} as const;

const flexBoxVariants = cva(
  [
    "flex w-full",
    "has-data-[position=absolute-center]:relative **:data-[position=absolute-center]:absolute **:data-[position=absolute-center]:top-1/2 **:data-[position=absolute-center]:left-1/2 **:data-[position=absolute-center]:-translate-1/2",
    "has-data-[position=fixed-top-center]:relative **:data-[position=fixed-top-center]:fixed **:data-[position=fixed-top-center]:top-0 **:data-[position=fixed-top-center]:left-1/2 **:data-[position=fixed-top-center]:-translate-x-1/2",
  ],
  {
    variants: {
      direction: {
        row: "flex-row",
        col: "flex-col",
      },

      gap: {
        none: "gap-ds-gap-none",
        1: "gap-ds-gap-lv-1",
        2: "gap-ds-gap-lv-2",
        3: "gap-ds-gap-lv-3",
      },

      align: {
        "top-left": "",
        "top-center": "",
        "top-right": "",
        "center-left": "",
        "center-center": "",
        "center-right": "",
        "bottom-left": "",
        "bottom-center": "",
        "bottom-right": "",
      },
    },

    defaultVariants: {
      direction: "row",
    },

    compoundVariants: [
      // row
      {
        direction: "row",
        align: "top-left",
        class: "items-start justify-start",
      },
      {
        direction: "row",
        align: "top-center",
        class: "items-start justify-center",
      },
      {
        direction: "row",
        align: "top-right",
        class: "items-start justify-end",
      },

      {
        direction: "row",
        align: "center-left",
        class: "items-center justify-start",
      },
      {
        direction: "row",
        align: "center-center",
        class: "items-center justify-center",
      },
      {
        direction: "row",
        align: "center-right",
        class: "items-center justify-end",
      },

      {
        direction: "row",
        align: "bottom-left",
        class: "items-end justify-start",
      },
      {
        direction: "row",
        align: "bottom-center",
        class: "items-end justify-center",
      },
      {
        direction: "row",
        align: "bottom-right",
        class: "items-end justify-end",
      },

      // col
      {
        direction: "col",
        align: "top-left",
        class: "justify-start items-start",
      },
      {
        direction: "col",
        align: "top-center",
        class: "justify-start items-center",
      },
      {
        direction: "col",
        align: "top-right",
        class: "justify-start items-end",
      },

      {
        direction: "col",
        align: "center-left",
        class: "justify-center items-start",
      },
      {
        direction: "col",
        align: "center-center",
        class: "justify-center items-center",
      },
      {
        direction: "col",
        align: "center-right",
        class: "justify-center items-end",
      },

      {
        direction: "col",
        align: "bottom-left",
        class: "justify-end items-start",
      },
      {
        direction: "col",
        align: "bottom-center",
        class: "justify-end items-center",
      },
      {
        direction: "col",
        align: "bottom-right",
        class: "justify-end items-end",
      },
    ],
  },
);

export interface FlexBoxProps {
  children?: ReactNode;
  className?: string;
  col?: boolean;
  as?: ElementType;
}

const FlexBox = ({
  children,
  className,
  align = "top-left",
  gap,
  col,
  as = "div",
  ...rest
}: FlexBoxProps & Omit<VariantProps<typeof flexBoxVariants>, "direction">) => {
  const Component = as;

  return (
    <Component
      className={cn(
        flexBoxVariants({
          direction: col ? "col" : "row",
          className,
          align,
          gap,
        }),
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { FlexBox, flexBoxVariants };
