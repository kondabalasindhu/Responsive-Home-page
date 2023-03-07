import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../images/homeimg.jpg";
import "./css/services.css";

const Same = (props) => {
  return (
    <div className="mainsection">
      <div className="contentBox">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="btnBox">
          <div className="btn">
            <NavLink to="/about" className="readMore">
              {props.btn}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src={props.imgsrc} alt="home" className="imrc" />
      </div>
    </div>
  );
};
export default Same;
