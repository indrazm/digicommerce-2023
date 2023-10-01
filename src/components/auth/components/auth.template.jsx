import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AuthTemplate = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <section className="bg-secondary-50 p-8">
        <Link href="/">
          <button className="btnGhost text-secondary-950 hover:text-secondary-100 flex items-center gap-1">
            <ChevronLeft size={18} />
            back to home
          </button>
        </Link>
      </section>
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
};
