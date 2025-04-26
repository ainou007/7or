import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const Product = ({
  name,
  price,
  image,
  description,
}: {
  name: string;
  price: {
    label: string;
    value: number;
  }[];
  image: string;
  description: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow">
      <div className="from-primary/50 absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-l to-white/10 p-4 text-2xl font-bold text-white capitalize transition-all duration-500 ease-in-out group-hover:-left-full">
        <div> {name}</div>
        <div className="text-base">
          {price[0].label + price[0].value + " MAD"}{" "}
        </div>
      </div>
      <Image
        src={image}
        width={300}
        height={300}
        alt="..."
        className="h-[440px] w-full object-cover"
      />

      <div className="bg-primary/40 absolute top-0 -right-full bottom-0 flex w-full flex-col items-center justify-center p-4 backdrop-blur-[8px] transition-all duration-500 ease-in-out group-hover:-right-0">
        <p className="mb-4 text-center text-xl font-medium text-white">
          {description}
        </p>
        <Button variant={"outline"}>
          <ShoppingCart />
          أضف إلى السلة
        </Button>
      </div>

      {/* <div className="p-4">
        <p className="text-primary mb-4 text-2xl font-bold">{name}</p>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {price.map((item) => (
            <p key={item.value} className="text-primary">
              {item.label}
              {item.value} MAD
            </p>
          ))}
        </div>
        <Button className="btn-primary mt-4">
          <ShoppingCart />
          أضف إلى السلة
        </Button>
      </div> */}
    </div>
  );
};

export default Product;
