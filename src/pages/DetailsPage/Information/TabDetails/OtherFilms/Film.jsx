import React from "react";
import { NavLink } from "react-router-dom";

const Film = ({ film }) => {
  return (
    <a
      className="card card-detail mr-[10px]"
      href={`/movies/details/${film._id}`}
    >
      <div className="wrapper">
        <img className=" object-cover" src={film.hinhChinh} alt="poster" />
      </div>
      <img className="title" src={film?.hinhChu} alt="title-photo" />
    </a>
  );
};

export default Film;
