import React from "react";
import Header from "../components/Header";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
