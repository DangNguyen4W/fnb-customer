import { OnboardPage } from "@/components/Page/OnboardPage";
async function Onboard() {
  const stepsRes = await fetch("http://localhost:3000/api/onboard", {
    next: {
      revalidate: 3600,
    },
  });

  const steps = await stepsRes.json();

  return <OnboardPage steps={steps} />;
}

export default Onboard;
