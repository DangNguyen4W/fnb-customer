import { OnboardPage } from "@/components/Page/OnboardPage";
import { onboardingSteps } from "../api/onboard/route";
async function Onboard() {
  let steps;
  try {
    const stepsRes = await fetch("http://localhost:3000/api/onboard", {
      next: {
        revalidate: 3600,
      },
    });
    steps = await stepsRes.json();
  } catch {
    steps = onboardingSteps;
  }

  return <OnboardPage steps={steps} />;
}

export default Onboard;
