import Link from "next/link";
import React from "react";

export const Register = () => {
  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3>Register</h3>
        <p>Hello! join as author</p>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <input name="firstName" placeholder="john" />
          <input name="lastName" placeholder="doe" />
        </div>
        <input name="username" placeholder="username" />
        <input name="email" placeholder="email@yours.com" />
        <input name="password" type="password" placeholder="password" />
        <button className="w-full">Register</button>
      </div>
      <p>
        Hve an account ?{" "}
        <Link href="/login">
          <span className="link">Login</span>
        </Link>
      </p>
    </main>
  );
};
