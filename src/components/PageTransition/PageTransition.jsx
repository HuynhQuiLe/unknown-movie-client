import React from "react";

const PageTransition = ({ text, pageNumber }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 page-transition-effect z-20 flex items-center justify-center">
      <p className="text-[30px] font-thin text-black tracking-[20px] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {text}
      </p>
      <p className=" fixed top-[20px] left-[40px] text-[30px] font-thin text-gray-300">
        <span className="text-black text-[40px]">{pageNumber}</span> / 3
      </p>
    </div>
  );
};

export default PageTransition;
