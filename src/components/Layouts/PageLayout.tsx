import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type PageLayoutPops = {
  children?: ReactNode;
  header?: ReactNode;
  bottom?: ReactNode;
  fixedHeader?: boolean;
};

function PageLayout({ children, header, bottom }: PageLayoutPops) {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden grid grid-rows-[auto_1fr_auto]",
      )}
    >
      <div>{header}</div>
      <main className="h-full w-full overflow-hidden">{children}</main>
      <div>{bottom}</div>
    </div>
  );
}

export { PageLayout };
