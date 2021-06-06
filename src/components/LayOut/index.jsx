import React from "react";
import CarouselCustom from "../../common/Carousel";
import Header from "../Header";
import ListPage from "../Product/pages/ListPage";

const Layout = () => {
  return (
    <>
      <Header />;
      <div className="container">
        <ListPage />
      </div>
    </>
  );
};

export default Layout;
