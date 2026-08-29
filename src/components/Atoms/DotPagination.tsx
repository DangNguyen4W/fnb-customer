"use client";
import { cn } from "@/lib/cn";
import { useMemo } from "react";

interface DotPaginationProps {
  total?: number;
  currentIndex?: number;
  className?: string;
}

function DotPagination({
  total = 0,
  className,
  currentIndex,
}: DotPaginationProps) {
  const dots = useMemo(() => {
    return Array.from({ length: total }, (_, i) => i);
  }, [total]);

  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      {dots.map((number, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={number}
            className={cn("bg-current size-1.5 duration-300 rounded-ds-full", {
              "w-8": isActive,
            })}
          ></div>
        );
      })}
    </div>
  );
}

export default DotPagination;
