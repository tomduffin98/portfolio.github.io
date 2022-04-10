import React from "react";
import styled from "styled-components";
import ProjectHeader from "./ProjectHeader";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "react-reveal/withReveal";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiHtml5 } from "react-icons/si";

function Portfolio({ text }) {
  return (
    <KinectCont>
      <KinectText>
        <Fade up>
          <ProjectHeader text={text} />
        </Fade>
        <SliceRight2>
          <PText className="right">
            <p>
              To explore front-end framesworks, I decided to create this
              portfolio using React to learn the component, state based approach
              to design.
            </p>
            <p>
              I learnt how to use conditional rendering, in which components are
              rendered relative to the state of the application. State was
              stored and altered via the useState() hook, so React could trigger
              a re-render on updated state.
            </p>
            <p>
              I've also explored a few libraries such as react-reveal &
              react-icons by adding dependancies with NPM. Thus, allowing me to
              inject animations and icons in a simple but effective manner.
            </p>
          </PText>
          <img src="images/portfolio/1.png" />
        </SliceRight2>
        <Fade right delay={200}>
          <SliceLeft>
            <img src="images/portfolio/2.png" />
            <PText className="left">
              <p>
                I also learned about styled components to inject CSS into
                reusable components. In order to make the views reactive I have
                used suitable units for different properties.
              </p>
              <p>
                For example, defining properties with pixels can lead to
                unwanted reactive design, relative units (em, rem, %, vw, vh),
                coupled with media queries allow for a simpler approach to
                achieving a functional reactive UI.
              </p>
              <p>
                Flex boxes and grid allow for good control over positioning of
                elements, aswell as controlling space, alignment and layout, and
                have been utilised numerous times throughout the creation of
                this site.
              </p>
            </PText>
          </SliceLeft>
        </Fade>
        <Fade>
          <IconFooter>
            <h3>TECH STACK</h3>
            <Cards>
              <Card>
                <FaReact />
                <h4>React</h4>
              </Card>
              <Card>
                <FaCss3></FaCss3>
                <h4>CSS3</h4>
              </Card>
              <Card>
                <FaHtml5 />
                <h4>HTML5</h4>
              </Card>
              <Card>
                <SiJavascript />
                <h4>Javascript</h4>
              </Card>
            </Cards>
          </IconFooter>
        </Fade>
      </KinectText>
    </KinectCont>
  );
}

const PText = styled.div`
  width: 50%;
  padding: 0 3vw 0 0;
  p {
    font-size: 1.25em;
    line-height: 2em;
    margin-top: 10px;
    width: 100%;
  }
  &.right {
    padding: 0 3vw 0 0;
  }
  &.left {
    padding: 0 0 0 3vw;
  }
  @media (max-width: 1050px) {
    width: 75%;
    &.right {
      padding: 0;
    }
    &.left {
      padding: 0;
    }
  }
`;

const KinectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

const KinectCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  h2 {
    text-align: center;
    font-size: 3em;
  }
`;

const SliceLeft = styled.div`
margin-top:10vh;
img{
  max-width:50%;
  border-radius: 4%;
  border: solid white 3px;
}
align-items:center;
display: flex;
width: 100%;
justify-content: flex:start;
@media (max-width: 1050px) {
  flex-direction: column;
  justify-content: center;
  text-align:center;
  img{
    order: 2;
  }
}
`;

const SliceRight = styled.div`
margin-top:5vh;
img{
  max-width:50%;
  border-radius: 4%;
  border: solid white 3px;
}

display: flex;
width: 100%;
justify-content: flex:end;
align-items:center;
@media (max-width: 1050px) {
  flex-direction: column;
  justify-content: center;
  text-align:center;
}
`;

const SliceRight2 = withReveal(SliceRight, <Fade left />);
const SliceLeft2 = withReveal(SliceLeft, <Fade right />);

const IconFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
  border-top: solid white 1px;
  h3 {
    margin: 5vh 0 3vh 0;
    padding: 0;
  }

  svg {
    font-size: 3em;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  svg {
    text-align: center;
    align-self: center;
  }
  h4 {
    padding: 0;
    margin: 0;
    margin-top: 5px;
    text-align: center;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0;
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 30px;
`;

export default Portfolio;
