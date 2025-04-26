import { ShoppingCart } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow backdrop-blur-2xl">
      <div className="container flex h-14 items-center justify-between">
        <Logo className="text-4xl" />

        <div className="relative">
          <div className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-rose-600 text-xs text-white">
            4
          </div>
          <Button variant={"outline"} size={"icon"}>
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
