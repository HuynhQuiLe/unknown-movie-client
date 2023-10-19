import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentsByMaPhim } from "../../../../../redux/action/comment/getAllCommentsByMaPhimAction";
import { userLocalStorage } from "../../../../../service/localService";
import { createNewComment } from "../../../../../redux/action/comment/createNewCommentAction";
import moment from "moment";

const Comment = ({ maPhim }) => {
  const dispatch = useDispatch();

  const { comments, error } = useSelector(
    (state) => state.getAllCommentsByMaPhimReducer
  );

  const { isLoading } = useSelector((state) => state.createNewCommentReducer);

  const [noiDung, setNoiDung] = useState("");

  useEffect(() => {
    dispatch(getAllCommentsByMaPhim(maPhim));
  }, [dispatch]);

  const renderComment = () => {
    if (!comments?.length) {
      return <p>{error}</p>;
    } else {
      return comments.map((cmt, index) => {
        return (
          <div className="flex items-start justify-start mb-[20px]">
            <img
              src={cmt.avatar}
              className="w-[50px] h-[50px] rounded-full object-cover mr-4"
              alt="avatar"
            />
            <div>
              <div className="bg-white px-4 py-2 text-black rounded-[5px]">
                <p className=" font-bold">{cmt.tenNguoiDung}</p>
                <p className=" font-light"> {cmt.noiDung}</p>
              </div>
              <div className="flex justify-between items-end mt-2">
                <p className=" cursor-pointer">Like</p>
                <p className=" font-thin text-[12px] text-gray-200">
                  {moment(cmt.created_at).format("DD/MM/YYYY  hh:mm a")}
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const hanelechange = (e) => {
    setNoiDung(e.target.value);
  };

  const handleSubmit = () => {
    const commentObject = {
      noiDung,
      maPhim,
      maNguoiDung: userLocalStorage.get()._id,
    };

    dispatch(createNewComment(commentObject)).then((result) => {
      if (result) {
        setNoiDung("");
      }
    });
  };

  return (
    <div className="pb-[70px]">
      <div className="mt-4">
        <textarea
          className="w-full text-black px-3 p-1 rounded-[3px] border-none outline-none"
          value={noiDung}
          rows="2"
          placeholder="Bạn đang nghĩ gì về bộ phim này."
          onChange={hanelechange}
        ></textarea>
        <div className="text-right mt-5">
          <button
            className="px-5 py-1 rounded-[3px] bg-blue-600"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Gửi
          </button>
        </div>
      </div>
      <div className="mt-[30px]">{renderComment()}</div>
    </div>
  );
};

export default Comment;
