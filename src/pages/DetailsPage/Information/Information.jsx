import React from "react";
import NameAndRating from "./NameAndRating/NameAndRating";
import TabDetails from "./TabDetails/TabDetails";

const Information = ({ movie }) => {
  return (
    <div className=" flex flex-col items-start justify-center w-[100%]">
      <NameAndRating movie={movie} />
      <TabDetails movie={movie} />
    </div>
  );
};

export default Information;
