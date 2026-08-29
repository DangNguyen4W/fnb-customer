import { Avatar, AvatarFallback, AvatarImage } from "@/components/Atoms/Avatar";
import { FlexBox } from "@/components/Atoms/FlexBox";
import Icon from "@/components/Atoms/Icon";
import { Typography } from "@/components/Atoms/Typography";
import SearchBar from "@/components/Molecules/SearchBar";
import { cn } from "@/lib/cn";

interface HomeHeaderProps {
  className?: string;
}

function HomeHeader({ className }: HomeHeaderProps) {
  return (
    <FlexBox
      col
      className={cn(
        "bg-ds-cl-bg-brand-primary-main rounded-b-ds-3xl p-ds-pd-2xl text-ds-cl-text-base-inverse",
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
