import Image from "next/image";
import Link from "next/link";
import React from "react";

import navLinks from "../constants/navigationLinks";

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
        <nav className="flex-1 flex gap-6 text-3xl items-center justify-between">
          <div className="flex items-center gap-6 ">
            {navLinks.map((link) => (
              <Link href={link.link}>{link.name}</Link>
            ))}
          </div>
          <Link href="#">Выйти</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
