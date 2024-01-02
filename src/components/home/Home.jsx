import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";

import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Button from "./Button";

const Home = () => {
  const backgroundImageUrl = "../../assets/imgesBg/ooorganize.svg";
  return (
    <section
      className="home container"
      id="home"
      style={{ background: `url(${backgroundImageUrl})` }}
    >
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="120" />
        <h1 className="home__name">Hasindu Rangika</h1>
        <span className="home__education">I'm a Passionate Developer</span>

        <HeaderSocials />

        {/* <a href="#contact" className="btn">
          {" "}
        </a> */}
        <Button title={"Contact me"} />
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
