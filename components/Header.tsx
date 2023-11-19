import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-20 w-full text-white bg-cyan-700 p-6">
      <div className="flex justify-between gap-8">
        <div className="text-2xl">Resume builder</div>
        <div className="flex justify-between gap-5 text-lg ">
          <div>Build</div>
          <div>Upload</div>
          <div>Source code</div>
        </div>
      </div>
      <div className="flex justify-start gap-3">
        <div>Sign in</div>
        <div>Locale</div>
      </div>
    </div>
  );
};

export default Header;
