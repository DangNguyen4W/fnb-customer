import { FlexBox } from "@/components/Atoms/FlexBox";
import TitleGroup from "@/components/Molecules/TitleGroup";
import ProductHorizontalCard from "../product/ProductHorizontalCard";
import { Typography } from "@/components/Atoms/Typography";

function HomeMain() {
  return (
    <FlexBox col gap={2} className="p-ds-pd-px-page">
      <TitleGroup>
        <Typography variant="title-level-2">Meals</Typography>
      </TitleGroup>
      <FlexBox col gap={3} className="w-full">
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
        <ProductHorizontalCard />
      </FlexBox>
    </FlexBox>
  );
}

export default HomeMain;
