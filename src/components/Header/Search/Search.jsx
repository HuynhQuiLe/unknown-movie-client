import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../service/configService";
import { removeVietnameseTones } from "../../../utils/changeVietnamese";
import { NavLink } from "react-router-dom";
import "./search.css";

const Search = ({ showSearch }) => {
  const [searckKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState(null);
  const [arraySearch, setArraySearch] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}movies`).then(({ data }) => {
      setMovies(data.movies);
    });
  }, []);

  const search = (e) => {
    setSearchKey(e.target.value);
    const arrSearch = [];
    movies?.map((item) => {
      if (
        removeVietnameseTones(item.tenPhim)
          .replaceAll(" ", "")
          .toUpperCase()
          .includes(
            removeVietnameseTones(e.target.value)
              .replaceAll(" ", "")
              .toUpperCase()
          )
      ) {
        arrSearch.push(item);
      }
    });
    if (e.target.value) {
      setArraySearch(arrSearch);
    } else {
      setArraySearch([]);
    }
  };

  const renderSearchResult = () => {
    if (!arraySearch.length) {
      return "Không tìm thấy kết quả tìm kiếm.";
    } else {
      return arraySearch.map((movie, index) => {
        return (
          <NavLink
            className="w-[150px] mr-[10px]"
            to={`/movies/details/${movie._id}`}
            target="_blank"
          >
            <div className="w-[150px]">
              <img
                className=" object-cover w-[150px] h-[225px] rounded-[3px]"
                src={movie.hinhChinh}
                alt="poster"
              />
              <p className="truncate mt-2 font-bold text-[15px]">
                {movie.tenPhim.toUpperCase()}
              </p>
            </div>
          </NavLink>
        );
      });
    }
  };

  return (
    // <div
    //   className={`w-[100vw] flex justify-center top-[20px] relative ${
    //     showSearch ? "opacity-100 z-10" : "opacity-0 -z-40"
    //   } `}
    //   style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
    // >
    //   <input
    //     type="text"
    //     placeholder="Vui lòng nhập tên phim."
    //     className={` ${
    //       showSearch ? "w-[400px] scale-100" : "w-0 scale-0"
    //     } h-[40px] text-[16px] rounded-[50px] px-[20px] outline-[#fca311]  shadow-lg border-[1px] border-top-[#000]`}
    //     style={{ transition: "all .3s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
    //   />
    // </div>
    <div
      className={`w-[100vw] ${
        showSearch
          ? "h-[400px] border-b-[2px] border-[#fca311]"
          : "h-0 border-0"
      } bg-white absolute top-0  -z-10`}
      style={{ transition: "all .3s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
    >
      {showSearch && (
        <div className="mt-[60px]">
          <div className=" max-w-[1024px] p-[0 22px] m-auto">
            <input
              type="text"
              placeholder="Vui lòng nhập tên phim."
              autoFocus
              value={searckKey}
              onChange={search}
              className=" outline-none text-[20px] text-[#fca311]"
            />
            <div className="mt-5 flex max-w-[1024px] overflow-scroll no-scroll-bar">
              {renderSearchResult()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
