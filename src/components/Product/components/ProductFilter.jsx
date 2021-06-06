import React from "react";
import PropTypes from "prop-types";
import { Radio, Space } from "antd";

const ProductFilter = (props) => {
  const { handleFilter, handleData } = props;
  return (
    <Radio.Group className="filter__group" defaultValue="All">
      <Space direction="vertical">
        <Radio.Button value="All" onClick={handleData} className="filter__btn">
          All Products
        </Radio.Button>
        <Radio.Button
          value="men's clothing"
          onClick={(e) => handleFilter(e.target.value)}
          className="filter__btn"
        >
          Men's clothing
        </Radio.Button>
        <Radio.Button
          className="filter__btn"
          value="jewelery"
          onClick={(e) => handleFilter(e.target.value)}
        >
          Jewelery
        </Radio.Button>
        <Radio.Button
          className="filter__btn"
          value="electronics"
          onClick={(e) => handleFilter(e.target.value)}
        >
          Electronics
        </Radio.Button>
        <Radio.Button
          className="filter__btn"
          value="women's clothing"
          onClick={(e) => handleFilter(e.target.value)}
        >
          Women's clothing
        </Radio.Button>
      </Space>
    </Radio.Group>
  );
};

ProductFilter.propTypes = {};

export default ProductFilter;
