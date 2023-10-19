import React from "react";

const Trailer = ({ trailer }) => {
  const string = trailer.slice(0, 17);
  return (
    <div className="flex justify-center mt-[20px]">
      <iframe
        src={trailer.replace(string, "https://www.youtube.com/embed/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[450px]"
      ></iframe>
    </div>
  );
};

export default Trailer;
