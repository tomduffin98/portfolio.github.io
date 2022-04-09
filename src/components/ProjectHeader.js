import React from "react";
import styled from "styled-components";

function ProjectHeader({ text }) {
  return (
    <Header>
      <h2>{text}</h2>
    </Header>
  );
}

export default ProjectHeader;

const Header = styled.div`
  h2 {
    margin: 2vh 0 0 0;
    text-align: center;
    font-size: 3em;
    color: white;
  }
`;
