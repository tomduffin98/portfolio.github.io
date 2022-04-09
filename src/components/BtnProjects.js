import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "react-reveal/withReveal";

function BtnProjects({ active, text, changeActiveProject }) {
  //console.log(`${text} is active : ${active}`);
  return (
    <StyledButton onClick={() => changeActiveProject(text)} active={active}>
      {text}
    </StyledButton>
  );
}

export default BtnProjects;

////border: solid ${({ active }) => (active ? `6px green` : ` 3px white`)};

const StyledButton = styled.button`
  align-self: flex-start;
  margin: 2vw 1vw;
  margin-bottom: 2vh;
  font-size: 1.5em;
  background: transparent;
  color: white;
  padding: 7.5px 20px;
  border-radius: 10%;
  cursor: pointer;
  border: solid 2px red;
  transition: border 0.35s ease;
  transition: color 0.35s ease;
  animation: fadein 0.5s linear forwards;

  &:hover {
    color: rgba(0, 255, 255, 0.75);
    //color: white;
  }

  //text inside
  ${({ active }) =>
    active ? `color: rgba(0, 255, 255, 1);` : ` color: grey;`};

  //border
  border: solid
    ${({ active }) => (active ? `2px rgba(0, 255, 255, 1);` : ` 2px grey`)};
`;

// background: ${({ active }) =>
// active ? `rgba(0, 255, 171,0.5)` : ` rgba(59, 59, 59, 0.5)`};
