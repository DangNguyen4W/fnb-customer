import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { Typography } from "../Atoms/Typography";
import { cn } from "@/lib/cn";

const titleLevelsVariants = cva("", {
  variants: {
    level: {
      1: "text-ds-size-title-level-1",
      2: "text-ds-size-title-level-2 font-ds-w-semibold",
      3: "text-ds-size-title-level-3",
      4: "text-ds-size-title-level-4",
      5: "text-ds-size-title-level-5",
      6: "text-ds-size-title-level-6",
    },
  },
});

type TitleLevelsVariantProps = VariantProps<typeof titleLevelsVariants>;

type TitleLevelsProps = {
  children?: ReactNode;
  className?: string;

  /**
   * Defines the semantic hierarchy of the title.
   *
   * Recommended usage:
   * 1 → Page title
   * 2 → Section title
   * 3 → Subsection title
   * 4 → Minor section title
   * 5 → Minor heading
   * 6 → Smallest heading
   */
  level?: TitleLevelsVariantProps["level"];
};

function TitleLevels({ children, level = 1, className }: TitleLevelsProps) {
  return (
    <Typography className={cn(titleLevelsVariants({ level, className }))}>
      {children}
    </Typography>
  );
}

export default TitleLevels;
