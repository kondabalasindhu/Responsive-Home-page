import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact us</h1>
      <form className="contact">
        <div>
          <label htmlfor="name">Name</label>
          <input type="text" placeholder="enter your name" />
        </div>
        <div>
          <label htmlfor="name">Email</label>
          <input type="email" placeholder="enter your email" />
        </div>
        <div>
          <label htmlfor="name">password</label>
          <input type="password" placeholder="enter your password" />
        </div>
        <div>
          <label htmlfor="mobile">mobile</label>
          <input type="mobile" placeholder="enter your mobile" />
        </div>
        <div className="btnBox">
          <div className="btn">
            <NavLink to="/about" className="readMore">
              submit details
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact;
