import React from "react";
// import { NavLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
import Same from "./Same";
const About = () => {
  return (
    <>
      <Same
        title="Know more about us"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the i ndustry's standard dummy text ever
      since the 1500s, when an unkn own printer took a galley of type and
      scrambl"
        imgsrc={img1}
        btn="know more"
      />
    </>
  );
};
export default About;
