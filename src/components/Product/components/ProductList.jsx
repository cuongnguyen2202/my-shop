import React from "react";
import { Row, Skeleton } from "antd";
import ProductItems from "./ProductItems";

const ProductList = (props) => {
  const { data } = props;
  return (
    <Row gutter={[16, 32]} className="product__list">
      {data &&
        data.map((item, index) => {
          return (
            <ProductItems
              id={item.id}
              key={index + 1}
              description={item.description}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          );
        })}
    </Row>
  );
};

export default ProductList;
