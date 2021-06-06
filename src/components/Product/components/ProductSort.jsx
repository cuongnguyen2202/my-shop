import React from "react";
import PropTypes from "prop-types";
import { Radio, Select } from "antd";
const { Option } = Select;

const ProductSort = (props) => {
  const { handleSortAsc, handleSortDesc } = props;
  function handleChange(value) {
    if (value === "c") {
      handleSortAsc();
    } else if (value === "b") {
      handleSortDesc();
    }
  }

  return (
    <>
      <Select
        defaultValue="Order By"
        onChange={handleChange}
        style={{ width: 200 }}
        className="product__sort"
      >
        <Option value="b">Price Low to Hight</Option>
        <Option value="c">Price Hight to Low</Option>
      </Select>
    </>
  );
};

ProductSort.propTypes = {};

export default ProductSort;
