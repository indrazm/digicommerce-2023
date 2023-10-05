"use client";

import { Header, Footer, ScreenSize } from "../sharedui/";
import { usePathname } from "next/navigation";

export const StandartLayout = ({ children }) => {
  const currentPath = usePathname();

  if (currentPath === "/login" || currentPath === "/register") {
    return (
      <>
        <ScreenSize />
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <ScreenSize />
      <div className="max-w-5xl mx-8 xl:m-auto flex flex-col justify-between min-h-screen">
        <div className="space-y-12">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
