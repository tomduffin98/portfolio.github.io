import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("");
  let page = useLocation();

  let homePage = false;
  let educationPage = false;
  let projectPage = false;

  let curPage = (current) => {
    if (page.pathname === "/") {
      homePage = true;
      educationPage = false;
      projectPage = false;
      return homePage;
    }
    if (page.pathname === "/projects") {
      homePage = false;
      educationPage = false;
      projectPage = true;
      return projectPage;
    }
    if (page.pathname === "/education") {
      homePage = false;
      educationPage = true;
      projectPage = false;
      return educationPage;
    }
    return false;
  };

  curPage(page.pathname);

  // let listener = null;
  // const [scrollState, setScrollState] = useState("top");

  // useEffect(() => {
  //   listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 120) {
  //       if (scrollState !== "amir") {
  //         setScrollState("amir");
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top");
  //       }
  //     }
  //   });
  //   return () => {
  //     document.removeEventListener("scroll", listener);
  //   };
  // }, [scrollState]);

  return (
    <Fade down>
      <AnimateBox>
        {/* <Nav scrolled={scrollState}> */}
        <Nav>
          <NavLinks>
            <ul>
              <li>
                <NavLink to="/">
                  <ColorCurrent active={homePage}>
                    <span className="homeLink">HOME</span>
                  </ColorCurrent>
                </NavLink>
              </li>
              <li>
                <NavLink to="projects">
                  <ColorCurrent active={projectPage}>
                    <span className="projectLink">PROJECTS</span>
                  </ColorCurrent>
                </NavLink>
              </li>
              <li>
                <NavLink to="education">
                  <ColorCurrent active={educationPage}>
                    <span className="homeLink">EDUCATION</span>
                  </ColorCurrent>
                </NavLink>
              </li>
            </ul>
          </NavLinks>
        </Nav>
      </AnimateBox>
    </Fade>
  );
}

export default NavBar;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 8.5%;
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 20px;
    }
  }

  @media (max-width: 1050px) {
    width: 100%;
    ul {
      li {
        padding: 15px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  padding: 0px;
  color: white;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: white;
    font-weight: bold;
    letter-spacing: 1.45px;
    transition: letter-spacing 275ms linear;
    span {
      &:after {
        opacity: 1;
        transform: scaleX(1);
        transition: all 275ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
        transform-origin: center;
      }
    }
  }
  font-family: raleway;
  letter-spacing: 1px;

  span {
    @media (max-width: 1050px) {
      font-size: 2vw;
    }
    @media (max-width: 768px) {
      font-size: 3vw;
    }
    position: relative;
    font-size: 18px;
    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00011f;
  height: 8vh;
  width: 100%;
  //border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(0, 255, 255, 1);
`;
const ColorCurrent = styled.div`
  position: relative;
  ${({ active }) =>
    active &&
    `
    color: rgba(0, 255, 255, 1);
    &:after {
      position: absolute;
      content: "";
      height: 4px;
      //was yellow
      background:rgba(0, 255, 255, 1);
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
    }
  `}
`;

const AnimateBox = styled.div`
  display: flex;
`;
