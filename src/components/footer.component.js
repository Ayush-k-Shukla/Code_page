/* eslint-disable no-unused-vars */
import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import "./nav.css";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div class="footer">
      <footer class="text-center text-white">
        <div class="container">
          <section>
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="/">
              <SocialIcon url="https://www.facebook.com/codebietjhs" />
            </a>
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="/">
              <SocialIcon url="https://www.linkedin.com/company/codebietjhs/mycompany/" />
            </a>
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="/">
              <SocialIcon url="https://github.com/codebiet" />
            </a>
          </section>
        </div>

        <div class="text-center text-dark p-3">
          © 2021 Copyright :
          <a class="text-dark" href="">
            Club of Developers, BIET Jhansi
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
