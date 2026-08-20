import { Typography } from "../Atoms/Typography";
import { PageLayout } from "../Layouts/PageLayout";
import { FlexBox } from "../Template/FlexBox";

function SplashScreen() {
  return (
    <PageLayout>
      <FlexBox className="h-full" col align={"center-center"}>
        <Typography variant={"title-display-medium"}>Delivo</Typography>
        <Typography>Order. Eat. Repeat</Typography>
      </FlexBox>
    </PageLayout>
  );
}

export { SplashScreen };
