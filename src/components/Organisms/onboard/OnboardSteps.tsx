"use client";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import OnboardStep, { OnboardStepDataType } from "./OnboardStep";
import { useCallback, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { FlexBox } from "@/components/Atoms/FlexBox";
import { Typography } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import DotPagination from "@/components/Atoms/DotPagination";

export interface OnboardStepsProps {
  steps?: OnboardStepDataType[];
}

function OnboardSteps({ steps }: OnboardStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const currentStepData = steps?.[currentStep];

  const handleChangeStep = useCallback((swiper: SwiperType) => {
    setCurrentStep(swiper.activeIndex);
  }, []);

  const handleContinue = useCallback(() => {
    swiperRef.current?.swiper?.slideNext();
  }, []);

  return (
    <div className="size-full relative">
      <Swiper
        key={steps?.length}
        effect={"fade"}
        modules={[EffectFade]}
        className="size-full"
        onSlideChange={handleChangeStep}
        ref={swiperRef}
      >
        {steps?.map((step) => (
          <SwiperSlide key={step.id}>
            <OnboardStep step={step} />
          </SwiperSlide>
        ))}
      </Swiper>
      <FlexBox
        col
        className="absolute bottom-0 left-0 z-ds-raised min-h-1/2 gap-12 p-ds-gap-page text-center"
        align={"bottom-center"}
        gap={1}
      >
        <FlexBox
          col
          align={"center-center"}
          className="text-ds-cl-text-base-inverse gap-1.5"
        >
          <Typography variant={"title-level-1"}>
            {currentStepData?.title}
          </Typography>
          <Typography variant={"content-body-medium"}>
            {currentStepData?.description}
          </Typography>
        </FlexBox>
        <DotPagination
          className="text-ds-cl-text-brand-primary-main"
          currentIndex={currentStep}
          total={steps?.length}
        />
        <Button onClick={handleContinue} fullWidth>
          Continue
        </Button>
      </FlexBox>
    </div>
  );
}

export default OnboardSteps;
