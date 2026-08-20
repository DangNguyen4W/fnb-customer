import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "border-w": [
        { border: ["width-none", "width-default", "width-emphasis"] },
      ],
      "font-weight": [
        {
          font: ["ds-w-default", "ds-w-medium", "ds-w-semibold", "ds-w-bold"],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
