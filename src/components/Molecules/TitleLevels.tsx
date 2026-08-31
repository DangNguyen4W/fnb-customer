import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Typography, TypoGraphyProps } from "../Atoms/Typography";

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
    emphasis: {
      default: "font-ds-w-default",
      moderate: "font-ds-w-medium",
      emphasized: "font-ds-w-semibold",
      strong: "font-ds-w-bold",
    },
  },
});

type TitleLevelsVariantProps = VariantProps<typeof titleLevelsVariants>;

type TitleLevelsProps = {
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
  /**
   * Visual weight of the heading.
   *
   * Corresponding weights:
   * default -> 400 <-> font-ds-w-default
   * moderate -> 500 <-> font-ds-w-medium
   * emphasized -> 600 <-> font-ds-w-semibold
   * strong -> 700 <-> font-ds-w-bold
   *
   * Use this together with level to define heading hierarchy.
   */
  emphasis?: TitleLevelsVariantProps["emphasis"];
} & TypoGraphyProps;

function TitleLevels({
  children,
  level = 1,
  className,
  emphasis = "moderate",
  ...rest
}: TitleLevelsProps) {
  return (
    <Typography
      {...rest}
      className={cn(titleLevelsVariants({ level, className, emphasis }))}
    >
      {children}
    </Typography>
  );
}

export default TitleLevels;
