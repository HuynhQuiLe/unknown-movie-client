import React from "react";
import HeaderDetails from "../../../pages/DetailsPage/HeaderDetails/HeaderDetails";
import { Outlet } from "react-router-dom";

const DetailsAndBookingLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative  overflow-hidden bg-black">
      <div className="px-[50px]">
        <HeaderDetails />
        <Outlet />
      </div>
    </div>
  );
};

export default DetailsAndBookingLayout;
