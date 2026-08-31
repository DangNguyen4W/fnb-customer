import Image from "next/image";
import { Button } from "../Atoms/Button";
import { FlexBox, Position } from "../Atoms/FlexBox";
import FlexBoxAddOn from "../Atoms/FlexBoxAddOn";
import Icon from "../Atoms/Icon";
import { PageLayout } from "../Layouts/PageLayout";
import PageHeader from "../Organisms/PageHeader";
import { ScrollArea } from "../Atoms/ScrollArea";
import TitleLevels from "../Molecules/TitleLevels";
import { Typography } from "../Atoms/Typography";
import { Separator } from "../Atoms/Separator";
import { Badge } from "../Atoms/Badge";
import { Textarea } from "../Atoms/TextArea";
import { RadioGroup, RadioGroupItem } from "../Atoms/radio-group";
import { Label } from "../Atoms/Label";

function ProductDetailScreen() {
  return (
    <PageLayout
      header={
        <FlexBox col className="h-0">
          <PageHeader
            data-position={Position.FixedTopCenter}
            withoutBack
            className="z-ds-raised"
          >
            <Button layout={"icon"} variant={"secondary"}>
              <Icon name="X" />
            </Button>
            <FlexBoxAddOn order={"last"} className="ml-auto">
              <Button layout={"icon"} variant={"secondary"}>
                <Icon name="Share" />
              </Button>
            </FlexBoxAddOn>
          </PageHeader>
        </FlexBox>
      }
    >
      <ScrollArea className={"size-full"}>
        <FlexBox col>
          <div className="w-full aspect-[1.8] relative">
            <Image
              fill
              src="https://swiperjs.com/demos/images/abstract-1.jpg"
              alt=""
            />
          </div>
          <FlexBox col className="p-ds-pd-page pb-ds-pd-b-page" gap={1}>
            <FlexBox className="items-center justify-between">
              <TitleLevels level={2}>Cheese Sizzling </TitleLevels>
              <TitleLevels level={2}>$15.00</TitleLevels>
            </FlexBox>
            <Typography className="text-ds-cl-text-base-sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aspernatur corrupti fugit culpa repellat facere ipsam nihil
              aliquid, consequuntur vel officiis vero modi, quibusdam optio
              expedita perspiciatis qui quis quod.
            </Typography>
            <Separator />
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <RadioGroup defaultValue="comfortable" className="w-fit">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </FlexBox>
            <Separator />
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <RadioGroup defaultValue="comfortable" className="w-fit">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </FlexBox>
            <Separator />
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <Textarea placeholder="Việc thực hiện yêu cầu còn tuỳ thuộc vào khả năng của quán" />
            </FlexBox>
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <Textarea placeholder="Việc thực hiện yêu cầu còn tuỳ thuộc vào khả năng của quán" />
            </FlexBox>
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <Textarea placeholder="Việc thực hiện yêu cầu còn tuỳ thuộc vào khả năng của quán" />
            </FlexBox>
            <FlexBox col gap={3}>
              <FlexBox className="items-center justify-between">
                <TitleLevels level={3}>Thêm lưu ý cho quán </TitleLevels>
                <Badge variant={"secondary"}>Không bắt buộc</Badge>
              </FlexBox>
              <Textarea placeholder="Việc thực hiện yêu cầu còn tuỳ thuộc vào khả năng của quán" />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </ScrollArea>
    </PageLayout>
  );
}

export { ProductDetailScreen };
