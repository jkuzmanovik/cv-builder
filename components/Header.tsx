import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  const {userId} = auth();



  return (
    <div className="flex justify-between h-20 w-full text-white bg-cyan-700 p-6">
      <div className="flex justify-between gap-8">
        <Link href={"/"} className="text-2xl">Resume builder </Link>
        <div className="flex justify-between gap-5 text-lg ">
          <Link href={"/build"}>Build CV</Link>
          <Link href={"/mycv"}>My CV</Link>
          <div>Source code</div>
        </div>
      </div>
      <div className="flex justify-start gap-3">
        <div>My profile</div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
