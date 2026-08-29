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
      "text-color": [
        {
          text: [(value: string) => value.startsWith("ds-cl-text-")],
        },
      ],

      "font-size": [
        {
          text: [(value: string) => value.startsWith("ds-size-")],
        },
      ],
      shadow: [
        {
          shadow: [
            (value: string) =>
              value.startsWith("ds-") && !value.startsWith("ds-cl-effect-"),
          ],
        },
      ],

      "shadow-color": [
        {
          shadow: [(value: string) => value.startsWith("ds-cl-effect-")],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
