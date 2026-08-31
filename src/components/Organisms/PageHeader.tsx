import TitleLevels from "@/components/Molecules/TitleLevels";
import { ReactNode } from "react";
import { FlexBox, FlexBoxProps, Position } from "@/components/Atoms/FlexBox";
import { cn } from "@/lib/cn";
import { Button } from "@/components/Atoms/Button";
import Icon from "@/components/Atoms/Icon";

interface PageHeaderProps extends FlexBoxProps {
  title?: ReactNode;
  withoutBack?: boolean;
}

function PageHeader({
  title,
  className,
  withoutBack,
  children,
  ...rest
}: PageHeaderProps) {
  return (
    <FlexBox
      {...rest}
      className={cn(
        "px-ds-pd-control-x p-ds-pd-control-y w-full items-center gap-3",
        className,
      )}
    >
      {!withoutBack && (
        <Button layout="icon" variant={"secondary"}>
          <Icon name="ArrowLeft" />
        </Button>
      )}
      {!!title && (
        <TitleLevels
          level={1}
          emphasis={"moderate"}
          data-position={Position.AbsoluteCenter}
        >
          {title}
        </TitleLevels>
      )}
      {children}
    </FlexBox>
  );
}

export default PageHeader;
