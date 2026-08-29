import { ReactNode } from "react";
import { FlexBox } from "../Atoms/FlexBox";
import { cn } from "@/lib/cn";

interface TitleGroupProps {
  align?: "left" | "center" | "right";
  left?: ReactNode;
  right?: ReactNode;
  children?: ReactNode;
}

function TitleGroup({
  align = "left",
  left,
  right,
  children,
}: TitleGroupProps) {
  return (
    <FlexBox className="items-center gap-4">
      {left}
      <div
        className={cn({
          "mr-auto": align === "left",
          "max-auto": align === "center",
          "ml-auto": align === "right",
        })}
      >
        {children}
      </div>
      {right}
    </FlexBox>
  );
}

export default TitleGroup;
