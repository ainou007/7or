import { LucideIcon } from "lucide-react";
import React from "react";

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div>
      <Icon className="mx-auto mb-3 size-12 text-gray-600" />
      <h3 className="text-muted-foreground text-center text-xl font-bold">
        {title}
      </h3>
      <p className="text-muted-foreground mx-auto max-w-xs text-center">
        {description}
      </p>
    </div>
  );
};

export default Feature;
