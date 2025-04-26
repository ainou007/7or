import React from "react";

const Section = ({
  children,
  bgColor = false,
}: {
  children: React.ReactNode;
  bgColor?: boolean;
}) => {
  return (
    <section className={`${bgColor ? "bg-gray-50/85" : ""} py-24`}>
      {children}
    </section>
  );
};

export default Section;
