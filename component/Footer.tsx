import React, { FC } from "react";
import Link from "next/link";
import EnquiryForm from "./ContactForm";
import FooterEnquiryForm from "./ContactForm";
import About from "./About";

const Footer: FC = () => {
  return (
    <footer className="footer container-fulid mt-3" id="footer">
      <div className="container">
        <div className="row">
          {/* ABOUT SECTION */}
          <div className="col-md-6 col-sm-6 footer-text" id="about-us">
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

        {/* CHAT TOOL (STATIC UI AS PROVIDED) */}
        <div className="page-wraper">
          <div className="chat_tool">
            <div className="chat_window">
              <div className="welcome_page">
                <div className="chat_win_intro">
                  <h3>Welcome to Chat Tool</h3>
                  <p>
                    Search the Help Center or start a chat. We're here to help
                    you 24x7.
                  </p>
                </div>

                <div className="ch_theme_button">
                  <button className="gotoForm">
                    <i className="ion-android-send n_con_icon" />
                    New Conversation
                  </button>
                </div>
              </div>

              <div className="user_form">
                <div className="chat_header">
                  <div className="chat_header_inner">
                    <button className="chat_back_button">
                      <i className="fa fa-angle-left" />
                    </button>
                  </div>
                </div>

                <form id="firstForm">
                  <div className="user_form_inner">
                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="text"
                        name="contact_no"
                        placeholder="Contact No."
                        required
                      />
                    </div>

                    <div className="fieldrow">
                      <textarea
                        className="user_form_input first-not-space"
                        name="first_message"
                        rows={3}
                        placeholder="write message here..."
                        required
                      />
                    </div>
                  </div>

                  <div className="ch_theme_button">
                    <button className="chatSMS" type="submit">
                      <i className="ion-android-send n_con_icon" />
                      Start Chat
                    </button>
                  </div>
                </form>
              </div>

              <div className="chat_con">
                <div className="chat_header">
                  <div className="chat_header_inner">
                    <button className="chat_back_button">
                      <i className="fa fa-angle-left" />
                    </button>
                  </div>
                </div>

                <div className="chat_con_body">
                  <div className="chat_con_inner"></div>
                </div>

                <div className="chat_footer">
                  <form className="chat-form">
                    <div className="chat_footer_inner">
                      <input
                        type="text"
                        id="m"
                        className="chat_reply_input first-not-space"
                        placeholder="Write message here..."
                        required
                      />
                      <input type="hidden" name="userId" id="userId" />
                      <button className="chat_reply_submit">
                        <i className="ion-android-send" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <button className="call_button">
              <i className="fa fa-comments" />
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
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
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/sinckotgroup/reels/">
                    <i className="fa fa-instagram" />
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
