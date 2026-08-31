import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const flexBoxAddOnVariant = cva("", {
  variants: {
    order: {
      start: "order-first",
      last: "order-last",
    },
  },
});
type FlexBoxAddOnProps = VariantProps<typeof flexBoxAddOnVariant> & {
  className?: string;
  children?: ReactNode;
};

function FlexBoxAddOn({ order, className, ...rest }: FlexBoxAddOnProps) {
  return (
    <div className={cn(flexBoxAddOnVariant({ className, order }))} {...rest} />
  );
}

export default FlexBoxAddOn;
