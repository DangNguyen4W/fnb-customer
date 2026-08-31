import { FlexBox } from "@/components/Atoms/FlexBox";
import { IconName } from "@/components/Atoms/Icon/registry";

interface NavItemData {
  label?: string;
  path?: string;
  iconName?: IconName;
  activeIconName?: IconName;
}

interface BottomNavbarItemProps {
  data: NavItemData;
}

function BottomNavbarItem({ data }: BottomNavbarItemProps) {
  const { label } = data;

  return <FlexBox col>{label}</FlexBox>;
}

export default BottomNavbarItem;
