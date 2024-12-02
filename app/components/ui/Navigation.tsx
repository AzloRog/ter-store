"use client";
import React from "react";
import Link from "next/link";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";

import navLinks from "../../constants/navigationLinks";
import MessageIconUI from "./MessageIconUI";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const { goods } = useBasketStore((store) => store);

  const basketMessagesCount = goods.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  return (
    <nav>
      <div className="gap-6 text-3xl items-center justify-between hidden md:flex">
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.hasNotification) {
              return (
                <MessageIconUI
                  key={link.name}
                  notificationCount={basketMessagesCount}
                >
                  <Link href={link.link}>{link.name}</Link>
                </MessageIconUI>
              );
            }
            return (
              <Link key={link.name} href={link.link}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link href="#">Выйти</Link>
      </div>
      <MobileNavigation breakpoint="md" />
    </nav>
  );
};

export default Navigation;
