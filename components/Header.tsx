import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {



  return (
    <div className="flex justify-between h-20 w-full text-white bg-cyan-700 p-6">
      <div className="flex justify-between gap-8">
        <Link href={"/"} className="text-2xl">CV Builder</Link>
        <div className="flex justify-between gap-5 text-lg ">
          <Link href={"/build"}>Build CV</Link>
          <Link href={"/mycv"}>My CV</Link>
        </div>
      </div>
      <div className="flex justify-start gap-3">
        <SignedIn>
        <div>
          <Link href={"/user-profile"}>My Profile</Link>
        </div>
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-in"}>Sign in</Link>
        </SignedOut>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
