import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import Error from "./component/Error";
import List from "./component/List";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <List />
      <Routes>
        <Route path="/">
          <Route exact path="/" index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Error />} />
          <Route path="/List" element={<List />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
