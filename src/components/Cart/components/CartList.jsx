import { Button, Divider, Result, notification, Modal, Card } from 'antd';
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { history } from '../../../helps/history';
import { cartTotalSelector } from '../../../redux/selectors/Cart';
import CartItem from './CartItem';
const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message: message,
    duration: 2,
  });
};
const { Meta } = Card;
const CartList = props => {
  const {data} = props
  const totalPrice = useSelector(cartTotalSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.open('/','_self');
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleBuyNow = () =>{
    history.push('/');
  }
  const handleCheckOut =() =>{
    if(localStorage.getItem('users')===null){
    openNotificationWithIcon("error", "You must Login First!!")
    }else{
     showModal();
    }
  }
  return (

 <>
 <ul className='cart__list'>
   <li className="cart__item title">Image</li>
   <li className="cart__item title">Name</li>
   <li className="cart__item title">Price</li>
   <li className="cart__item title">Quantity</li>
   <li className="cart__item title">Total Price</li>
   <li className="cart__item title">Action</li>
 </ul>
 <Divider/>
  {data &&
        data.map((item, index) => {
          return (
            <>
            <CartItem
              id={item.data.id}
              key={index + 1}
              image={item.data.image}
              price={item.data.price}
              title={item.data.title}
              quantity ={item.data.quantity}
            />
            <Divider/>
            </>
          );
        })}
      {data.length === 0 && (
          <Result
          status="warning"
          title="No item in your cart."
          extra={
            <Button onClick={handleBuyNow} type="primary" key="console">
              Buy Now
            </Button>
          }
        />
      )}
    <ul className='cart__list'>
   <li className="cart__item cashout">Total</li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout"></li>
   <li className="cart__item cashout">{totalPrice}$</li>
 </ul>
 <Divider/>
 {data.length > 0 && (
   <Button type='primary' onClick={handleCheckOut} className='btn-checkout'>Checkout</Button>
 )}
   <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" danger key="ok" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
       <p className="cashout">Your order is confirmed</p>
      </Modal>


 </>
  )

}

CartList.propTypes = {

}

export default CartList
