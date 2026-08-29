import Image from "next/image";

export interface OnboardStepDataType {
  id: string | number;
  image?: string;
  title?: string;
  description?: string;
}

interface OnboardStepProps {
  step: OnboardStepDataType;
}

function OnboardStep({ step }: OnboardStepProps) {
  const { image } = step;

  return (
    <div className="relative size-full">
      {image && <Image fill alt="" src={image} objectFit="cover" />}
    </div>
  );
}

export default OnboardStep;
