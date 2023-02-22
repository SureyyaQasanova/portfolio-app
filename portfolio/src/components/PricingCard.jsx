import "./PricingCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
        <div className="pricing">
            <h1 className="web">Web Development</h1>
            <div className="card-container">
                <div className="card html">
                    <div className="face face1">
                        <div className="content">
                            <h3>- HTML & CSS-</h3>
                            <span className="bar"></span>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className="btc">HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications.</p>
                        </div>
                    </div>
                </div>
                <div className="card js">
                    <div className="face face1">
                        <div className="content">
                            <h3>-Javascript-</h3>
                            <span className="bar"></span>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className="btc">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.</p>
                        </div>
                    </div>
                </div>
                <div className="card react">
                    <div className="face face1">
                        <div className="content">
                            <h3>-React-</h3>
                            <span className="bar"></span>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className="btc">React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;