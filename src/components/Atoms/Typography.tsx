import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { type ElementType, type ReactNode } from "react";

const typographyVariantValues = {
  "title-display-large": "text-ds-size-title-display-large font-ds-w-bold",
  "title-display-medium": "text-ds-size-title-display-medium font-ds-w-bold",
  "title-display-small": "text-ds-size-title-display-small font-ds-w-semibold",
  "title-level-1": "text-ds-size-title-level-1 font-ds-w-bold",
  "title-level-2": "text-ds-size-title-level-2 font-ds-w-semibold",
  "title-level-3": "text-ds-size-title-level-3 font-ds-w-semibold",
  "title-level-4": "text-ds-size-title-level-4 font-ds-w-medium",
  "title-level-5": "text-ds-size-title-level-5 font-ds-w-medium",
  "title-level-6": "text-ds-size-title-level-6 font-ds-w-medium",
  "content-body-large": "text-ds-size-content-body-large font-ds-w-default",
  "content-body-medium": "text-ds-size-content-body-medium font-ds-w-default",
  "content-body-small": "text-ds-size-content-body-small font-ds-w-default",
  "content-body-tiny": "text-ds-size-content-body-tiny font-ds-w-default",
  "content-highlight-large":
    "text-ds-size-content-highlight-large font-ds-w-semibold",
  "content-highlight-medium":
    "text-ds-size-content-highlight-medium font-ds-w-semibold",
  "content-highlight-small":
    "text-ds-size-content-highlight-small font-ds-w-semibold",
  "content-label-large": "text-ds-size-content-label-large font-ds-w-medium",
  "content-label-medium": "text-ds-size-content-label-medium font-ds-w-medium",
  "content-label-small": "text-ds-size-content-label-small font-ds-w-medium",
  "content-label-tiny": "text-ds-size-content-label-tiny font-ds-w-medium",
  "content-support-large":
    "text-ds-size-content-support-large font-ds-w-default",
  "content-support-medium":
    "text-ds-size-content-support-medium font-ds-w-default",
  "content-support-small":
    "text-ds-size-content-support-small font-ds-w-default",
  "action-large": "text-ds-size-action-large font-ds-w-semibold",
  "action-medium": "text-ds-size-action-medium font-ds-w-semibold",
  "action-small": "text-ds-size-action-small font-ds-w-medium",
  "action-tiny": "text-ds-size-action-tiny font-ds-w-medium",
} as const;

export type TypographyVariant = keyof typeof typographyVariantValues;

const typographyVariants = cva("font-ds-family-primary", {
  variants: {
    variant: typographyVariantValues,
  },
  defaultVariants: {
    variant: "content-body-medium",
  },
});

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

  /**
   * Typography variant used for semantic text hierarchy.
   *
   * Heading variants: title-display-large, title-display-medium,
   * title-display-small, title-level-1, title-level-2, title-level-3,
   * title-level-4, title-level-5, title-level-6.
   *
   * Body text variants: content-body-large, content-body-medium,
   * content-body-small, content-body-tiny.
   *
   * Emphasis variants: content-highlight-large, content-highlight-medium,
   * content-highlight-small.
   *
   * Label variants: content-label-large, content-label-medium,
   * content-label-small, content-label-tiny.
   *
   * Support text variants: content-support-large, content-support-medium,
   * content-support-small.
   *
   * Action variants: action-large, action-medium, action-small,
   * action-tiny.
   *
   * Use title-* for headings, content-body-* for reading text,
   * content-label-* for labels, content-support-* for helper text,
   * and action-* for buttons/links/actions.
   */
  variant?: TypographyVariant;
}

function Typography({
  children,
  variant = "content-body-medium",
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
