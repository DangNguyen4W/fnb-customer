import { PageLayout } from "../Layouts/PageLayout";
import OnboardSteps, {
  OnboardStepsProps,
} from "../Organisms/onboard/OnboardSteps";

export interface OnboardScreenProps extends OnboardStepsProps {}

function OnboardScreen({ steps }: OnboardScreenProps) {
  return (
    <PageLayout>
      <OnboardSteps steps={steps} />
    </PageLayout>
  );
}

export { OnboardScreen };
