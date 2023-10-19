import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../redux/action/movie/getMovieDetailsAction";
import Poster from "./Poster/Poster";
import Information from "./Information/Information";
import { getAllMovies } from "../../redux/action/movie/getAllMoviesAction";
import CTA from "./CTA/CTA";
import PageTransition from "../../components/PageTransition/PageTransition";

const DetailsPage = () => {
  const { movie } = useSelector((state) => state.movieDetailsReducer);
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getAllMovies());
  }, [dispatch]);

  if (movie) {
    document.title = `Unknown® - ${movie?.tenPhim}`;
  }
  return (
    <>
      <div className=" max-w-[1440px] h-[90vh] text-white flex items-center m-auto">
        <div className="h-full flex items-center mr-[30px]">
          <Poster hinhChinh={movie?.hinhChinh} />
        </div>
        <div className="h-full ml-[30px] mt-[50px] w-full overflow-y-scroll overflow-x-hidden">
          <Information movie={movie} />
        </div>
        <CTA />
      </div>

      <PageTransition text="CHI TIẾT" pageNumber={2} />
    </>
  );
};

export default DetailsPage;
