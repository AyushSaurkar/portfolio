import React, { useContext } from "react";
import Typewriter from "typewriter-effect";

import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },

    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing col-12">
      <div className="landing--container col-12">
        <div
          className="landing--container-left"
          style={{ backgroundColor: 'white' }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a
                href="https://www.linkedin.com/in/ayush-saurkar-480b23237/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}

            {/* {socialsData.twitter && (
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
            {socialsData.youtube && (
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
            {socialsData.medium && (
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaMedium
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )} */}
            {socialsData.github && (
              <a
                href="https://github.com/AyushSaurkar"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right col-4"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            {/* <h6 style={{textAlign:"center",marginTop:"20%",color:"transparent"}} >{headerData.title}</h6> */}
            <div
              className="col-12"
              style={{ textAlign: "center", marginTop: "20%" }}
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/tal-zvon/tal-zvon/main/assets/Hand_Wave.gif"
                width="20%"
                alt=""
              />{" "}
            </div>
            <h1
              className="aimee"
              style={{ textAlign: "center", fontSize: "33px" }}
            >
              Ayush Saurkar
            </h1>
            <div style={{ textAlign: "center" }}>
              <h3>
                I am an
                <Typewriter
                  options={{
                    strings: [
                      "Associate Software Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h3>
            </div>

            <div
              style={{
                position: "relative",
                margin: "10% auto",
                width: "70%",
                marginBottom: "10%",
              }}
              className="lcr-buttonContainer"
            >
              <div style={{ marginBottom: "30px", marginRight: "2em" }}>
                {headerData.resumePdf && (
                  <a
                    href=""
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className={`${classes.resumeBtn} customResumeBtn`}>Download CV</Button>


                  </a>
                )}
              </div>

              <div style={{ marginBottom: "30px" }}>
                <NavLink
                  to="/#contacts"
                  smooth={true}
                  spy="true"
                  duration={2000}
                  style={{ textDecoration: "none" }}
                >
                  <Button className={classes.contactBtn}>Contact</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
