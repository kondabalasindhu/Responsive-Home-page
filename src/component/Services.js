import React from "react";

import "./css/Home.css";
import "./css/services.css";
import Card from "./Card";
import Data from "./Data";

const Services = () => {
  return (
    <>
      <h1>our Services </h1>
      <div className="services">
        {Data.map((values) => {
          return (
            <Card
              title1={values.stitle}
              imgSource={values.imgsrc}
              desc1={values.desc1}
              btnService={values.btnService}
            />
          );
        })}
      </div>
    </>
  );
};
export default Services;
