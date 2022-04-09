//import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
//import { Link } from "react-router-dom";
import BtnProjects from "./BtnProjects.js";
//import { FaFolder } from "react-icons/fa";
import ActiveContainer from "./ActiveContainer.js";
import Kinect from "./Kinect.js";
import Portfolio from "./Portfolio.js";
import Paylist from "./Paylist.js";

function Projects() {
  const [activeProject, setActiveProject] = useState("KINECT");

  function changeActiveProject(value) {
    setActiveProject(value);
  }

  return (
    <div>
      <Container>
        <h2>SELECT A PROJECT:</h2>
        <ProjectSelector>
          {/* <BtnProjects active={true} text="KINECT" /> */}
          <BtnProjects
            active={activeProject === "KINECT"}
            text="KINECT"
            changeActiveProject={changeActiveProject}
          />
          <BtnProjects
            active={activeProject === "PAYLIST"}
            text="PAYLIST"
            changeActiveProject={changeActiveProject}
          />
          <BtnProjects
            active={activeProject === "PORTFOLIO"}
            text="PORTFOLIO"
            changeActiveProject={changeActiveProject}
          />
        </ProjectSelector>
        <ProjectContainer>
          <ActiveContainer activeProject={activeProject} />
        </ProjectContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 92vh;
  height: auto;
  background: linear-gradient(#00011f, rgba(0, 4, 125, 0.5) 100%);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: white;
  margin: 0;
  & .project-header {
    font-size: 2em;
    color: #e8c7c8;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  & .project-container {
    margin-top: 10px;
  }

  & .project-header {
    text-transform: uppercase;
  }
  h2 {
    padding-top: 2vh;
    letter-spacing: 0.1em;
  }
`;

const ShowingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  padding-top: 35px;
`;

const KinectContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  display: none;
  //conditional display
  ${({ active }) =>
    active &&
    `
    display:flex;

`}
`;
const OSContainer = styled.div`
  color: white;
`;
const PAYLISTContainer = styled.div`
  color: white;
`;
const PortfolioContainer = styled.div`
  color: white;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  //border: solid white 2px;

  ////////////////////TEXT AND IMAGES////////////////////////
  & .project-text {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    font-size: 1.25em;
    line-height: 1.75em;
  }
  & .project-images {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProjectSelector = styled.div`
  border-bottom: solid white 2px;
`;

const TabSelector = styled.div`
  display: flex;
  padding-top: 2vh;
  justify-content: flex-start;
  //justify-content: center;
  align-items: center;
  width: 100%;
`;

// const StyledFaFolder = styled.div`
//   display: flex;
//   position: relative;
//   width: 96px;
//   height: 96px;
//   justify-content: center;
//   align-items: center;
//   svg {
//     position: absolute;
//     padding: 0;
//     margin: 0;
//     font-size: 6em;
//     color: white;
//     transform: scale(1, -1);
//   }
//   span {
//     position: absolute;
//     font-weight: bold;
//     color: black;
//     left: 6%;
//     top: 35%;
//     font-size: 0.7em;
//   }
// `;

export default Projects;
