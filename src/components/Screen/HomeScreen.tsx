"use client";
import { ScrollArea } from "../Atoms/ScrollArea";
import { PageLayout } from "../Layouts/PageLayout";
import HomeHeader from "../Organisms/home/HomeHeader";
import HomeMain from "../Organisms/home/HomeMain";

function HomeScreen() {
  return (
    <PageLayout>
      <ScrollArea className="h-full">
        <HomeHeader className="sticky top-0 z-ds-raised" />
        <HomeMain />
      </ScrollArea>
    </PageLayout>
  );
}

export { HomeScreen };
