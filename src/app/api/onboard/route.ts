import { NextResponse } from "next/server";

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to our platform",
    description:
      "Discover how our platform can help you manage your work more effectively.",
    image: "https://swiperjs.com/demos/images/abstract-1.jpg",
  },
  {
    id: 2,
    title: "Explore your workspace",
    description:
      "Everything you need is organized in one place, making it easy to get started.",
    image: "https://swiperjs.com/demos/images/abstract-2.jpg",
  },
  {
    id: 3,
    title: "Start your journey",
    description:
      "You're all set. Start exploring the platform and make the most of its features.",
    image: "https://swiperjs.com/demos/images/abstract-3.jpg",
  },
] satisfies OnboardingStep[];

export async function GET() {
  return NextResponse.json(onboardingSteps);
}
