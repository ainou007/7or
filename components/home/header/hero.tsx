import React from "react";
import Image from "next/image";
import Logo from "@/components/logo";

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100dvh-56px)] items-center justify-center">
      {/* <div className="absolute inset-0">
        <Image
          src={"/bg_hero.jpg"}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover opacity-[.15]"
        />
      </div> */}
      <div className="container text-center lg:text-start">
        <div className="grid grid-cols-12 items-center py-24">
          <div className="col-span-full lg:col-span-7">
            <h1>
              <Logo className="text-9xl" />
            </h1>
            <h2 className="text-muted-foreground mb-5 text-3xl font-bold">
              اكتشف كنوز الطبيعة الأصيلة في متجرنا!
            </h2>
            <div className="relative col-span-full mb-5 flex justify-center lg:hidden">
              <div className="bg-primary absolute top-1/2 left-1/2 aspect-square w-32 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"></div>
              <Image
                alt="hero image"
                src="/hero.png"
                width={500}
                height={500}
                className="w-64 max-w-full"
              />
            </div>
            <p className="text-muted-foreground text-lg leading-7">
              متجرنا يقدم أجود المنتجات الطبيعية الأصيلة مثل عسل السدر، الخروب،
              الدغموس، والزقوم بفوائدهم الصحية الفريدة، بالإضافة إلى زيت الأرغان
              المغربي الأصلي، الزعفران الأحمر، أملو اللوز والعسل، حبوب اللقاح،
              والزعتر البلادي بالليمون. كل منتج طبيعي 100%، مصدره موثوق، ويتميز
              بجودة عالية لضمان الفائدة والطعم الأصلي. اكتشف كنوز الطبيعة معنا
              واستمتع بصحة أفضل!
            </p>
          </div>

          <div className="relative col-span-full mb-5 hidden justify-center lg:col-span-5 lg:flex">
            <div className="bg-primary absolute top-1/2 left-1/2 aspect-square w-36 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"></div>
            <Image
              alt="hero image"
              src="/hero.png"
              width={500}
              height={500}
              className="w-64 max-w-full xl:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
