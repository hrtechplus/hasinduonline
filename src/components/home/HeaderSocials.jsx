import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  XTwitter,
} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div
      className="home__socials"
      style={{ justifyContent: "space-evenly", gap: "0" }}
    >
      <a
        href="https://www.github.com/hrtechplus"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

      {/* <a
        href="https://dev.to/gregsithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a> */}

      <a
        href="https://www.linkedin.com/in/hasinduonline/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://wwww.facebook.com/hasinduonline"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.twitter.com/hrtechplus"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
