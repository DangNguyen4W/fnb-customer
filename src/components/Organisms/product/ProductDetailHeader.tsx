import { FlexBox, Position } from "@/components/Atoms/FlexBox";
import PageHeader from "../PageHeader";
import { Button } from "@/components/Atoms/Button";
import Icon from "@/components/Atoms/Icon";
import FlexBoxAddOn from "@/components/Atoms/FlexBoxAddOn";

function ProductDetailHeader() {
  return (
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
  );
}

export default ProductDetailHeader;
