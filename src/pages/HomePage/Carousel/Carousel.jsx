import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarousels } from "../../../redux/action/carousel/getAllCarouselsAction";
import Dot from "./Dot";

const Carousel = () => {
  const { carousels } = useSelector((state) => state.carouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarousels());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousels.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carousels.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1440px] h-[780px] w-full m-auto pt-[50px] pb-16 px-[10px] relative group">
      <div
        style={{ backgroundImage: `url(${carousels[currentIndex].hinhAnh})` }}
        className="w-full h-full rounded-[10px] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {carousels.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Dot
              color={
                slideIndex === currentIndex
                  ? "black"
                  : "rgba(128, 128, 128, 0.4)"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
