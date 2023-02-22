import "./HeroImgStyles.css";
import 'animate.css';

import React from "react";
import IntroImg from "../assets/code.jpg";
import Me from "../assets/1.jpg"
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p className="hero-p">HI, I'M A FREELANCER.</p>
                <h1 className="hero-title">React Developer.</h1>
                <div className="animate__animated animate__backInDown">
                    <img src={Me} alt="Me" className="me" />
                </div>
            </div>
        </div>
    );
};

export default HeroImg;