"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top navbar-box">
      <div className="container">
        <Link href="/">
          <img
            src="/images/logo.jpg"
            alt="nav-logo"
            style={{ height: "70px" }}
          />
        </Link>

        <button
          className="navbar-toggler toggle-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu-list"
          aria-controls="menu-list"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse collapse-color" id="menu-list">
          <ul className="navbar-nav ml-auto nav-color nav-text">
            <li className="nav-item">
              <Link id="HOME-top" href="/">
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link id="ABOUT-US-top" href="/#about-us">
                ABOUT US
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="dropdown-toggle js-activated"
                href="#"
                data-bs-toggle="dropdown">
                GROUP PROFILE
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link id="SINCLAIR-MCKINSLEY-top" href="/sinclair-mckinsley">
                    SINCLAIR MCKINSLEY
                  </Link>
                </li>
                <li>
                  <Link id="SINCKOT-CAPITAL-top" href="/sinckot-capital">
                    SINCKOT CAPITAL
                  </Link>
                </li>
                <li>
                  <Link id="SINCLAIR-SOLOMONS-top" href="/sinclair-solomons">
                    SINCLAIR SOLOMONS
                  </Link>
                </li>
                <li>
                  <Link
                    id="SINCKOT-DEVELOPMENT-top"
                    href="/sinckot-development">
                    SINCKOT DEVELOPMENT
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link id="COMPLETED-PROJECTS-top" href="/#completed-projects">
                COMPLETED PROJECTS
              </Link>
            </li>

            <li className="nav-item">
              <Link id="CURRENT-PROJECTS-top" href="/#current-projects">
                CURRENT PROJECTS
              </Link>
            </li>
          </ul>

          <Link href="#footer" className="top-btn">
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
