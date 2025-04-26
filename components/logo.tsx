// import Image from "next/image";
import { cn } from "@/lib/utils";
import { Aref_Ruqaa } from "next/font/google";
import Link from "next/link";
import React from "react";

const aref_Ruqaa = Aref_Ruqaa({
  variable: "--font-aref_Ruqaa",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="font-bold">
      {/* <Image src="/logo.png" alt="hor" width={100} height={100} /> */}
      <span
        className={cn(
          `${aref_Ruqaa.className} text-primary mb-5 text-9xl font-black`,
          className,
        )}
      >
        الحر
      </span>{" "}
    </Link>
  );
};

export default Logo;
