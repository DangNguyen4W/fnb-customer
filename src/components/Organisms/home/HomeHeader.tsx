import { Avatar, AvatarFallback, AvatarImage } from "@/components/Atoms/Avatar";
import { FlexBox } from "@/components/Atoms/FlexBox";
import Icon from "@/components/Atoms/Icon";
import { Typography } from "@/components/Atoms/Typography";
import SearchBar from "@/components/Molecules/SearchBar";
import { cn } from "@/lib/cn";

interface HomeHeaderProps {
  className?: string;
  preventOverScroll?: boolean;
}

function HomeHeader({ className, preventOverScroll }: HomeHeaderProps) {
  return (
    <FlexBox
      col
      className={cn(
        "bg-ds-cl-bg-brand-primary-main rounded-b-ds-surface-lg p-ds-pd-surface text-ds-cl-text-base-inverse relative",
        {
          "after:block after:absolute after:w-full after:top-0 after:translate-y-[calc(-100%+2px)] after:h-80 after:left-0 after:bg-inherit":
            preventOverScroll,
        },
        className,
      )}
      gap={3}
    >
      <FlexBox className="justify-between w-full items-center">
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Icon name="Bell" />
      </FlexBox>
      <Typography variant={"title-level-1"}>
        What would you prefer to eat today?
      </Typography>
      <SearchBar />
    </FlexBox>
  );
}

export default HomeHeader;
