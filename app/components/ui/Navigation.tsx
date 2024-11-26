"use client";
import React from "react";
import Link from "next/link";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";

import navLinks from "../../constants/navigationLinks";
import MessageIconUI from "./MessageIconUI";

const Navigation = () => {
  const { goodsIds } = useBasketStore((store) => store);
  const basketMessagesCount = goodsIds.length;

  return (
    <nav className="flex gap-6 text-3xl items-center justify-between">
      <div className="flex items-center gap-6 ">
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
    </nav>
  );
};

export default Navigation;
