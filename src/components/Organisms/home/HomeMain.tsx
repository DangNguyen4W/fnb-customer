import { FlexBox } from "@/components/Atoms/FlexBox";
import ProductHorizontalCard from "../product/ProductHorizontalCard";
import TitleLevels from "@/components/Molecules/TitleLevels";

function HomeMain() {
  return (
    <FlexBox col gap={2} className="p-ds-pd-x-page">
      <FlexBox>
        <TitleLevels level={2} emphasis={"emphasized"}>
          Meals
        </TitleLevels>
      </FlexBox>
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
