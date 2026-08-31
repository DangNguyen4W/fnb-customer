import { cn } from "@/lib/cn";
import { IconName, IconsRegistry } from "./registry";

interface IconProps {
  name: IconName;
  size?: 3 | 4 | 5 | 6 | 8 | 9 | 10;
  width?: number;
  height?: number;
  className?: string;
}

function Icon({ name, width, height, size = 6, className }: IconProps) {
  const Component = IconsRegistry[name];

  return (
    <Component
      width={(size ? size * 4 : undefined) ?? width ?? height ?? 24}
      height={(size ? size * 4 : undefined) ?? height ?? width ?? 24}
      className={cn("text-current", className)}
    />
  );
}

export default Icon;
