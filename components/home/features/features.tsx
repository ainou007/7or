import features from "@/constants/features";
import React from "react";
import Feature from "./feature";
import Section from "@/components/seection/section";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/seection/section-title";

const Features = () => {
  return (
    <Section bgColor>
      <div className="container text-center">
        <SectionTitle
          title="لماذا نحن اختيارك الأمثل؟"
          description="لأننا نقدم لك الأفضل بطبيعة نقية! نؤمن بأنك تستحق الأجود والأصح، لذلك
        نحرص على:
"
        />
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            return <Feature key={feature.title} {...feature} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <Button>اطلب الآن واستمتع بفوائد الطبيعة في كل لقمة!</Button>
        </div>
      </div>
    </Section>
  );
};

export default Features;
