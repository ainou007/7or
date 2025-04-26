import Logo from "@/components/logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopFooter = () => {
  return (
    <div className="container grid grid-cols-12 items-end py-8">
      <div className="col-span-full text-center lg:col-span-8 lg:text-start">
        <Logo />
        <p>
          متجرنا يقدم أجود المنتجات الطبيعية الأصيلة مثل عسل السدر، الخروب،
          الدغموس، والزقوم بفوائدهم الصحية الفريدة، بالإضافة إلى زيت الأرغان
          المغربي الأصلي، الزعفران الأحمر، أملو اللوز والعسل، حبوب اللقاح،
          والزعتر البلادي بالليمون. كل منتج طبيعي 100%، مصدره موثوق، ويتميز
          بجودة عالية لضمان الفائدة والطعم الأصلي. اكتشف كنوز الطبيعة معنا
          واستمتع بصحة أفضل!
        </p>
      </div>

      <div className="col-span-full mt-4 flex items-end justify-center gap-4 lg:col-span-4 lg:mt-0 lg:justify-end">
        <Link href="#">
          <Facebook />
        </Link>
        <Link href="#">
          <Instagram />
        </Link>

        <Link href="#">
          <Twitter />
        </Link>
      </div>
    </div>
  );
};

export default TopFooter;
