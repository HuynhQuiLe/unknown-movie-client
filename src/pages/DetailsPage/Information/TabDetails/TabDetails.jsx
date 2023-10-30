import React from "react";
import { Tabs } from "antd";
import Introduction from "./Introduction/Introduction";
import Trailer from "./Trailer/Trailer";
import OtherFilms from "./OtherFilms/OtherFilms";
import Comment from "./Comment/Comment";
import Rate from "./Rate/Rate";

const TabDetails = ({ movie }) => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "GIỚI THIỆU",
      children: <Introduction movie={movie} />,
    },
    {
      key: "2",
      label: "TRAILER",
      children: <Trailer trailer={movie?.trailer} />,
    },
    {
      key: "3",
      label: "PHIM KHÁC",
      children: <OtherFilms />,
    },
    {
      key: "4",
      label: "ĐÁNH GIÁ",
      children: <Rate />,
    },
    {
      key: "5",
      label: "BÌNH LUẬN",
      children: <Comment maPhim={movie?.maPhim} />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      id="tab-detail-custom"
    />
  );
};

export default TabDetails;
