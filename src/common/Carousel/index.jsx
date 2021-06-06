/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "30rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};
const CarouselCustom = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src="https://salt.tikicdn.com/cache/w824/ts/banner/d2/13/bf/8f3ca9e652fcc3ecf9e050f0ddaeb256.png.jpg"
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src="https://cdn.tgdd.vn//GameApp/-1//thumbzs-800x450.jpg"
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src="https://salt.tikicdn.com/cache/w824/ts/banner/db/77/ee/fd89d07b4186d473bfc1e2510a975c7a.png.jpg"
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src="https://ezcomclass.com/wp-content/uploads/2020/06/66373704_480745772699625_5502242973242359808_o.png"
          style={contentStyle}
        />
      </div>
    </Carousel>
  );
};

export default CarouselCustom;
