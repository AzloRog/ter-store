"use client";
import navLinks from "@/app/constants/navigationLinks";
import Link from "next/link";
import React from "react";

interface Props {
  breakpoint: "sm" | "md" | "lg";
}
const MobileNavigation = ({ breakpoint }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  return (
    <div className={breakpoint + ":hidden"}>
      <div
        className="nav-burger z-10"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
      </div>
      <div
        className={
          (isMenuOpen ? "block" : "hidden") +
          " absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-95 "
        }
      >
        <ul className="text-white text-2xl flex flex-col gap-12 items-center pt-32">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.link} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
