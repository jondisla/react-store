/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="heroSection row">
          <div className="col-sm-5">
            <img
              src="https://freepngdownload.com/image/thumb/perfume-png-free-download-67.png"
              alt=""
            />
          </div>
          <div className="heroInfo col-sm-7">
            <div className="title">Men's Perfume</div>
            <h2>EAU DE PARFUM</h2>
            <h3>CHANNEL</h3>
            <div className="description">
              <p>
                A woody, aromatic fragrance for the man who defies convention; a
                provocative blend of citrus and woods that liberates the senses.
                Fresh, clean and profoundly sensual.
              </p>
              <p>
                BLEU DE CHANEL unites the invigorating zest of Grapefruit and
                the power of an aromatic accord with the woody whisper of Dry
                Cedar. New Caledonian Sandalwood lends it a warm and sensual
                trail. A meeting of strength and elegance.
              </p>
              <div className="price">$89.99</div>
              <div className="divider"></div>
              <div className="buyBtnLarge">
                <a href="">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
