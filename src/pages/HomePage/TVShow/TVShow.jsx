import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import "./TVShow.css";

const TVShow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div id="appleTV">
      <div className="py-[60px] text-center text-[45px]">
        <h2>Apple TV+</h2>
      </div>
      <div className="slider">
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-between",
              userSelect: "none",
            },
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              opacity: 1,
            },
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: "",
            style: {
              display: "none",
            },
          }}
          backwardBtnProps={{
            children: "",
            style: { display: "none" },
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 8,
                width: 8,
                margin: "15px 7px",
                borderRadius: "50%",
                border: 0,
                cursor: "pointer",
              },
            },
            activeItemBtnProps: {
              style: {
                height: 8,
                width: 8,
                margin: "15px 7px",
                borderRadius: "50%",
                border: 0,
                background: "black",
                cursor: "pointer",
              },
            },
          }}
          itemsToShow={2}
          speed={400}
          centerMode
          autoplay
          autoplayDirection="forward"
          autoplayDelay={3000}
        >
          {/* {Array.from({ length: 10 }).map((item, index) => (
        <div
          style={{
            background: "yellow",
            width: 300,
            height: 300,
            border: "30px solid white",
            textAlign: "center",
            lineHeight: "240px",
            boxSizing: "border-box",
          }}
          key={index}
        >
          {index}
        </div>
      ))} */}
          <div className="slider-item">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/GN0TEibneL648LCMEPgYsA/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/NqLsbMhcVgmpucFvm1v-XA/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/o5jvtIr2-nlPxz7yBrwYPA/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/Io9kiHy63rDn0lXJuTK4gA/1960x1102.jpg"
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src="https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/1960x1102.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TVShow;
