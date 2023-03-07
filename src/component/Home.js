import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../images/homeimg.jpg";
import "./css/Home.css";
import Same from "./Same";
const Home = () => {
  return (
    <>
      <Same
        title="Learning Made Easy "
        text=" Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the i ndustry's standard dummy text
          ever since the 1500s, when an unkn own printer took a galley of type
          and scrambled it to make."
        imgsrc={homeimg}
        btn="ReadMore"
      />
    </>
  );
};
export default Home;
