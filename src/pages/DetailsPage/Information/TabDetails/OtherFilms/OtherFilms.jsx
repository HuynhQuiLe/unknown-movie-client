import React from "react";
import { useSelector } from "react-redux";
import Film from "./Film";
import { useParams } from "react-router-dom";

const OtherFilms = () => {
  const param = useParams();
  const { movies } = useSelector((state) => state.allMoviesReducer);
  return (
    <div className=" overflow-scroll no-scroll-bar">
      <div className=" mb-5 w-[fit-content]">
        <div className="flex">
          {movies.map((movie, index) => {
            if (param.id !== movie._id) {
              return <Film film={movie} key={index} index={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherFilms;
