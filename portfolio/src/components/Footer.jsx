import "./FooterStyles.css";

import React from "react";
import {
    FaInstagram,
    FaHome,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>I.Kayibov 313a</p>
                            <p>Azerbaijan,Ganja.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>

                            <FaPhone
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            070-880-33-43
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            sureyyaqasanova@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the portfolio</h4>
                    <p>
                        This portfolio is a website that showcases my knowledge and skills.
                    </p>
                    <div className="social">
                        <NavLink to="https://instagram.com/hasan0vaa._?igshid=ZDdkNTZiNTM=" ><FaInstagram
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        /></NavLink>
                        <NavLink to="https://github.com/SureyyaQasanova">
                            <FaGithub
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }}
                            />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/sureyya-hasanova-6130a0271/">
                        <FaLinkedin
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;