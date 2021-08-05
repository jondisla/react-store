/** @format */

import React from "react";
import { GiAbstract100 } from 'react-icons/gi';
import { GrDeliver } from 'react-icons/gr';
import { MdMoneyOff } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import './ProductFooter.css'

export default function ProductFooter(props) {
  return (
    <>
      <div className="container">
        <div className="productFooter text-center">
          <h2>100% Authentic Product</h2>
          <p>The Eau de Toilette comes in a spray for easy application.</p>

          <div className="productFeatures row">
            <div className="col-sm-3">
                <div className="icon"><GiAbstract100 /></div>
              <p>100% Genuine Product Guarantee</p>
            </div>
            <div className="col-sm-3">
                <div className="icon"><GrDeliver /></div>
              <p>On Time Delivery</p>
            </div>
            <div className="col-sm-3">
                <div className="icon"><MdMoneyOff /></div>
              <p>100% Return or Exchange</p>
            </div>
            <div className="col-sm-3">
                <div className="icon"><BiSupport /></div>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
