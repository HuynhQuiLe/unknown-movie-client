import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  let [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };
  }, [progressWidth]);
  return (
    <div
      className={`absolute h-[2px] bg-[#fca311] top-[0px]`}
      style={{ width: `${progressWidth}%` }}
    ></div>
  );
};

export default ScrollIndicator;
