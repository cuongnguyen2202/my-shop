import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Card, Button, Modal } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { useCart } from "../../../redux/hooks/Cart";
const { Meta } = Card;

const ProductItems = (props) => {
  const { id, title, image, description, price } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cart, action } = useCart();
  let [quantity, setQuantity] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAddToCard = (data) => {
    setQuantity((quantity = quantity + 1));
    action.addToCart({ ...data, quantity });
  };
  return (
    <>
      <Col xs={{ span: 8 }}>
        <Card
          className="product__card"
          hoverable
          cover={
            <img
              alt="example"
              src={image}
              className="product__image"
              onClick={showModal}
            />
          }
          actions={[
            <p className="product__price">{price} $</p>,
            <Button
              type="primary"
              shape="round"
              icon={<CarOutlined />}
              size="middle"
              danger
              onClick={() => handleAddToCard(props)}
            >
              Add to cart
            </Button>,
          ]}
        >
          <Meta
            title={title}
            description={description}
            className="product__text"
          />
        </Card>
      </Col>
      <Modal
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" danger key="ok" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <Card
          className="product__modal"
          hoverable
          cover={
            <img alt="example" src={image} className="product__modal-img" />
          }
        >
          <Meta description={description} />
        </Card>
      </Modal>
    </>
  );
};

ProductItems.propTypes = {};

export default ProductItems;
