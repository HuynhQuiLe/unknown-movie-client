import React, { useState } from "react";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import User from "./User/User";
import Search from "./Search/Search";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header
      className="h-[50px] w-[100vw]  text-[14px]  text-primary-text fixed top-0 left-0 bg-bg-color-header z-[1]"
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <ScrollIndicator />
      <div className="container max-w-[1024px] p-[0 22px] m-auto">
        <div className="header__wrapper h-[50px] flex items-center justify-between">
          <div className="logo w-[20%]">
            <a href="/">
              <img
                src="https://uploads-ssl.webflow.com/645cf761f60657f1a3bfd6de/646b7b76d5f40e5af959a61c_UK-favicon.png"
                alt="logo"
                className="w-[15px] h-[15px]"
              />
            </a>
          </div>
          <div className="w-[60%] flex items-center justify-center gap-12">
            <a href="/#onAir">Phim đang chiếu</a>
            <a href="/#soon">Phim sắp chiếu</a>
            <a href="/#appleTV">Apple TV+</a>
            <a href="#booking">Đặt vé</a>
            <a href="#">Hỗ trợ</a>
          </div>
          <div className="w-[20%] flex items-center justify-end">
            <div
              className="search cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="44px"
                viewBox="0 0 15 44"
              >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
              </svg>
            </div>
            <User />
          </div>
        </div>
      </div>
      <Search showSearch={showSearch} />
    </header>
  );
};

export default Header;
