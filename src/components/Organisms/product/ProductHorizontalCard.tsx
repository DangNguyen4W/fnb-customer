import { FlexBox } from "@/components/Atoms/FlexBox";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";
import { ProductData } from "./product";
import Icon from "@/components/Atoms/Icon";
import { Button } from "@/components/Atoms/Button";
import TitleLevels from "@/components/Molecules/TitleLevels";

interface ProductHorizontalCardProps {
  product?: ProductData;
}

function ProductHorizontalCard({ product }: ProductHorizontalCardProps) {
  return (
    <div className="gap-3 w-full shadow-ds-surface rounded-ds-item-sm grid grid-cols-[auto_1fr] p-ds-pd-item-tiny">
      <div className="aspect-square h-full relative">
        <Image
          src={"https://swiperjs.com/demos/images/abstract-1.jpg"}
          alt=""
          fill
          objectFit="cover"
          className="rounded-ds-item-tiny"
        />
      </div>
      <FlexBox col>
        <TitleLevels level={5} emphasis={"moderate"}>
          {product?.name ?? "Cheese Sizzling"}
        </TitleLevels>
        <FlexBox
          align={"center-left"}
          className="gap-1 text-ds-cl-text-base-sub"
        >
          <Icon name="Clock4" size={4} />
          <Typography variant="content-body-small">
            {"15-30 min • 1.3 km"}
          </Typography>
        </FlexBox>
        <FlexBox className="gap-1" align="center-left">
          <Icon name="Star" size={4} className="text-ds-cl-app-rating" />
          <Typography variant="content-body-medium">
            <span className="text-ds-cl-app-rating">4.2</span> (92 reviews)
          </Typography>
        </FlexBox>
        <FlexBox className="items-center justify-between w-full">
          <Typography variant="content-highlight-medium">$14</Typography>
          <Button size={"sm"}>
            <Icon name="Plus" size={4} />
            Add
          </Button>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default ProductHorizontalCard;
