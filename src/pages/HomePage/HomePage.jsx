import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import TVShow from "./TVShow/TVShow";
import ListMovie from "./ListMovie/ListMovie";
import Booking from "./Booking/Booking";
import ComingMovieList from "./ComingMovie/ComingMovieList";
import Loading from "./Loading/Loading";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const { isShowHomePage } = useSelector((state) => state.effectReducer);
  const [isShowTransition, SetIsShowTransition] = useState(false);
  useEffect(() => {
    return (e) => {
      console.log(e);
    };
  }, []);
  return (
    <>
      {!isShowHomePage && <Loading />}
      {isShowHomePage && (
        <div>
          <Carousel />
          <ListMovie />
          <ComingMovieList />
          <TVShow />
          <Booking />
        </div>
      )}
      {isShowTransition && (
        <div className="w-[100vw] h-[100vh] bg-black fixed top-0 left-0"></div>
      )}
    </>
  );
};

export default HomePage;
