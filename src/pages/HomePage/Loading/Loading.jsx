import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SHOW_HOME_PAGE } from "../../../redux/constant/effect/effectConstants";

const Loading = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const texts = [
    "🇺🇸 Hello 🇺🇸",
    "🇰🇷 안녕하세요 🇰🇷",
    "🇨🇳 你好 🇨🇳",
    "🇱🇦 Sabaidee 🇱🇦",
    "🇩🇰 Hallo 🇩🇰",
    "🇲🇹 Здраво 🇲🇹",
    "🇬🇪 გამარჯობა 🇬🇪",
    "🇫🇮 Hyvää päivää 🇫🇮",
    "🇻🇳 Xin chào! 🇻🇳",
  ];

  const clear = setTimeout(() => {
    console.log(1);
    setIndex((index) => ++index);
  }, 300);

  if (index === texts.length) {
    clearTimeout(clear);
    dispatch({ type: SHOW_HOME_PAGE });
  }

  return (
    <div className={index === texts.length ? "hidden" : ""}>
      <div className="w-[100vw] h-[100vh] bg-black fixed top-0 left-0 z-10 ">
        {texts.map((text, ind) => {
          return (
            <p
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[70px] transition-all duration-300 ease-in-out"
              style={{ opacity: index === ind ? 1 : 0 }}
              key={ind}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
