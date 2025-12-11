import React, { FC } from "react";
import Link from "next/link";
import EnquiryForm from "./ContactForm";
import FooterEnquiryForm from "./ContactForm";
import About from "./About";
import ChatTool from "./Chat";

const Footer: FC = () => {
  return (
    <footer className="footer container-fulid mt-3" id="footer">
      <div className="container">
        <div className="row">
          {/* ABOUT SECTION */}
          <div className="col-md-6 col-sm-12 footer-text" id="about-us">
            {/* <h3>About Us</h3>
            <p>
              First established in 2006, Sinckot Group began with a primary
              focus in Healthcare Services, Residential and Commercial Property
              Developments, Property Portfolio Management, Accounting and
              Taxation Advisory, Online Healthcare Support System Developments,
              Financial and Business Management Consultancy, and Business
              Acquisition and Liquidation Advisory.
            </p> */}
            <About />

            <div className="footer-box">
              <i className="fa fa-map-marker" />
              <p>Location:</p>
              <h6>Sinckot House, 211 Station Road, Harrow, HA1 2TP</h6>
            </div>

            <div className="footer-box">
              <i className="fa fa-mobile" />
              <p>Phone:</p>
              <h6>0208 427 8787</h6>
            </div>

            <div className="footer-box">
              <i className="fa fa-envelope" />
              <p>Email:</p>
              <h6>info@sinckotgroup.co.uk</h6>
            </div>
          </div>

          {/* FORM SECTION */}
          <FooterEnquiryForm />
        </div>
        <div className="page-wraper">
          <ChatTool />
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright-text">
              Copyright ©2025 Sinckot. All Rights Reserved Powered By{" "}
              <a href="http://www.iudyog.com/" target="_blank">
                iUdyog
              </a>
            </p>

            <div className="copyright-icon">
              <ul>
                <li>
                  <a href="https://www.facebook.com/sinckotgroup/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/sinckotgroup/reels/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
