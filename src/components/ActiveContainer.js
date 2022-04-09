import React from "react";
import Kinect from "./Kinect";
import Paylist from "./Paylist";
import Portfolio from "./Portfolio";
import styled from "styled-components";

function ActiveContainer({ activeProject }) {
  return (
    <Wrapper>
      {activeProject === "KINECT" ? (
        <Kinect text="KINECT PROJECT"></Kinect>
      ) : null}
      {activeProject === "PAYLIST" ? (
        <Paylist text="PAYLIST PROJECT"></Paylist>
      ) : null}
      {activeProject === "PORTFOLIO" ? (
        <Portfolio text="PORTFOLIO PROJECT"></Portfolio>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  align-self: center;
`;

export default ActiveContainer;
