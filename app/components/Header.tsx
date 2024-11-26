import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./ui/Navigation";

const Header = () => {
  return (
    <header className="px-4 py-4">
      <div className="container flex items-center gap-16">
        <Link href="/" className="flex gap-2 items-center text-4xl">
          <Image
            src={"/Title.webp"}
            height={60}
            width={200}
            alt="Terraria"
            className="relative top-[-8px]"
          />
          <h1>Shop</h1>
        </Link>
        <div className="flex-1">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
