import React from "react";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto mb-20 max-w-xl text-center">
      <h3 className="text-muted-foreground mb-2 text-4xl font-bold">{title}</h3>
      <p className="text-primary text-xl">{description}</p>
    </div>
  );
};

export default SectionTitle;
