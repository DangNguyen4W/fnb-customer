import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

const typographyVariants = cva("font-ds-family-primary", {
  variants: {
    variant: {
      "title-display-large": "",
      "title-display-medium":
        "text-ds-size-title-display-medium font-ds-w-bold",
      "title-display-small": "",
      "title-level-1": "",
      "title-level-2": "",
      "title-level-3": "",
      "title-level-4": "",
      "title-level-5": "",
      "title-level-6": "",
      "content-body-large": "",
      "content-body-medium": "",
      "content-body-small": "",
      "content-body-tiny": "",
      "content-highlight-large": "",
      "content-highlight-medium": "",
      "content-highlight-small": "",
      "content-label-large": "",
      "content-label-medium": "",
      "content-label-small": "",
      "content-label-tiny": "",
      "content-support-large": "",
      "content-support-medium": "",
      "content-support-small": "",
      "action-large": "",
      "action-medium": "",
      "action-small": "",
      "action-tiny": "",
    },
  },
  defaultVariants: {
    variant: "content-body-medium",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

const HTMLTagMapping: Partial<Record<TypographyVariant, ElementType>> = {
  "title-display-large": "h1",
  "title-display-medium": "h1",
  "title-display-small": "h1",
  "title-level-1": "h1",
  "title-level-2": "h2",
  "title-level-3": "h3",
  "title-level-4": "h4",
  "title-level-5": "h5",
  "title-level-6": "h6",
};

interface TypoGraphyProps extends VariantProps<typeof typographyVariants> {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

function Typography({
  children,
  variant,
  as: As = variant ? (HTMLTagMapping[variant] ?? "span") : "span",
  className,
}: TypoGraphyProps) {
  return (
    <As className={cn(typographyVariants({ variant, className }))}>
      {children}
    </As>
  );
}

export { Typography, typographyVariants };
