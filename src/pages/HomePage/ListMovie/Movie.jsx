import React from "react";
import { NavLink } from "react-router-dom";
const Movie = ({ movie, index }) => {
  const margin = (window.innerWidth - 1024) / 2;
  return (
    <NavLink
      className="card mr-[10px]"
      style={{ marginLeft: index === 0 ? `${margin}px` : "" }}
      to={`/movies/details/${movie._id}`}
      target="_blank"
    >
      <div className="wrapper">
        <img className=" object-cover" src={movie.hinhChinh} alt="poster" />
      </div>
      <img className="title" src={movie?.hinhChu} alt="title-photo" />
      <img
        className="character"
        style={{ width: "220px", objectFit: "cover" }}
        src={movie?.hinhNhanVat}
      />
    </NavLink>
  );
};

export default Movie;
