import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../../redux/hooks/Products";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import "./style.scss";
const ListPage = (props) => {
  const { Content, Sider } = Layout;
  const { actions } = useProducts();
  const [data, setData] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    actions.getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // setData(JSON.parse(localStorage.getItem("listData")));
    handleData();
  }, []);
  const handleData = () => {
    setData(JSON.parse(localStorage.getItem("listData")));
  };
  const handleSortDesc = () => {
    setData(
      data.slice().sort((a, b) => {
        return Number(a.price) - Number(b.price);
      })
    );
  };
  const handleSortAsc = () => {
    setData(
      data.slice().sort((a, b) => {
        return Number(b.price) - Number(a.price);
      })
    );
  };
  const handleFilter = (value) => {
    setData(
      JSON.parse(localStorage.getItem("listData"))
        .slice()
        .filter((item) => {
          return item.category === value;
        })
    );
  };

  return (
    <Layout className="product__layout">
      <Sider theme="light" className="product__right">
        <p className="product__right-text">List Products Filter</p>
        <ProductFilter handleFilter={handleFilter} handleData={handleData} />
      </Sider>
      <Content style={{ backgroundColor: "#fff" }} className="product__right">
        <ProductSort
          handleSortAsc={handleSortAsc}
          handleSortDesc={handleSortDesc}
        />
        <ProductList data={data} />
      </Content>
    </Layout>
  );
};

ListPage.propTypes = {};

export default ListPage;
