import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../../redux/action/movie/getAllMoviesAction";
import Movie from "./Movie";
import moment from "moment";

const ListMovie = () => {
  const { movies } = useSelector((state) => state.allMoviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  const number = movies?.filter(
    (movie) =>
      movie.hienThiPhim && moment(movie.khoiChieu).isSameOrBefore(new Date())
  ).length;
  return (
    <div id="onAir">
      <div className="pt-[60px] text-center text-[45px]">
        <h2>Phim đang chiếu nào phù hợp với bạn?</h2>
      </div>
      <div className=" overflow-scroll no-scroll-bar">
        <div className=" mb-5 w-[fit-content]">
          <div className="flex">
            {movies
              ?.filter(
                (movie) =>
                  movie.hienThiPhim &&
                  moment(movie.khoiChieu).isSameOrBefore(new Date())
              )
              .map((movie, index) => {
                return <Movie movie={movie} key={index} index={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
