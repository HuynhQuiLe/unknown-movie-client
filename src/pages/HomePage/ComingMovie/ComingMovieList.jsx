import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../../redux/action/movie/getAllMoviesAction";
import moment from "moment";
import ComingMovie from "./ComingMovie";

const ComingMovieList = () => {
  const { movies } = useSelector((state) => state.allMoviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    document.querySelector(".no-scroll-bar").onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      // setProgressWidth(scrolled);
    };
  }, []);
  return (
    <div id="soon">
      <div className="pt-[60px] text-center text-[45px]">
        <h2>Phim sắp chiếu nào phù hợp với bạn?</h2>
      </div>
      <div className=" overflow-x-scroll no-scroll-bar">
        <div className=" mb-5 w-[fit-content]">
          <div className="flex items-end">
            {movies
              ?.filter(
                (movie) =>
                  movie.hienThiPhim &&
                  !moment(movie.khoiChieu).isSameOrBefore(new Date())
              )
              .map((movie, index) => {
                return <ComingMovie movie={movie} key={index} index={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingMovieList;
