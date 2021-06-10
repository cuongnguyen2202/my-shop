/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import {
FacebookOutlined,
TwitterOutlined,
InstagramOutlined
}from '@ant-design/icons';
import './style.scss'
const FooterCustom = () => {
  return (
    <Footer className='footer'>

        <p className='footer__title'>Follow Us</p>
        <div className="footer__follow">
          <a href="https://www.facebook.com/" className='footer__link'><FacebookOutlined className='footer__icon'/></a>
          <a href="https://www.facebook.com/" className='footer__link'><TwitterOutlined className='footer__icon'/></a>
          <a href="https://www.facebook.com/" className='footer__link'><InstagramOutlined className='footer__icon'/></a>
        </div>
        <p className="footer__copyright">
                © COPYRIGHT 2021 By Nguyen Cuong
            </p>

    </Footer>
  )
}

export default FooterCustom
