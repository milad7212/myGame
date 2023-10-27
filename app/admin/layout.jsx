import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className=" min-h-screen p-8 bg-amber-300">sidebar</div>
        <div className="grow">{children}</div>
      </div>
    </>
  );
};

export default layout;
