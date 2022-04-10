import React from "react";
import styled from "styled-components";
import ProjectHeader from "./ProjectHeader";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "react-reveal/withReveal";
import { FaXbox } from "react-icons/fa";
import { SiCsharp, SiSqlite, SiXaml, SiWindows } from "react-icons/si";

function Kinect({ text }) {
  return (
    <KinectCont>
      <KinectText>
        <Fade up>
          <ProjectHeader text={text} />
        </Fade>
        <SliceRight2>
          <PText className="right">
            <p>
              Written in C# & utilising the Kinect SDK toolkit, I created a
              Kinect Application that could detect and analyse a users squat
              movement.
            </p>
            <p>
              The result was an WPF Windows application built on the .NET
              framework. A testing suite was developed using XUNIT, which
              ensured that the image processing functionality was correct.
            </p>
          </PText>
          <img src="portfolio.github.io/images/kinect/one.png" />
        </SliceRight2>
        <Fade right delay={200}>
          <SliceLeft>
            <img src="./images/kinect/ten.png" />
            <PText className="left">
              <p>
                By extracting infomation from the depth camera & developing good
                validation logic, the application was able to render feedback to
                the user in real time.
              </p>
              <p>
                Concurrent techniques were used to deliver real time feedback,
                mostly via deploying multiple threads of workers to execute
                different functionality.
              </p>
            </PText>
          </SliceLeft>
        </Fade>
        <SliceRight2>
          <PText className="right">
            <p>
              An in-memory SQLite database was also added to allow a user to see
              their progress and their average score with a graphical user
              interface.
            </p>
            <p>
              The app can make reccomendations to the user based on the scores
              stored - such as which weight the user should use and whether to
              regress/progress.
            </p>
          </PText>
          <img src="./images/kinect/three.png" />
        </SliceRight2>
        <SliceLeft2>
          <img src="./images/kinect/nine.png" />
          <PText className="left">
            <p>
              As image processing applications require fast memory access to run
              seamlessly, having control of the underlying bitmap image frames
              via pointers, allowed for optimisation of available resources (CPU
              & memory), therefore allowing a less powerful machine to run the
              app efficiently.
            </p>
          </PText>
        </SliceLeft2>
        <Fade>
          <IconFooter>
            <h3>TECH STACK</h3>
            <Cards>
              <Card>
                <SiCsharp></SiCsharp>
                <h4>C#</h4>
              </Card>
              <Card>
                <SiSqlite></SiSqlite>
                <h4>SQLite</h4>
              </Card>
              <Card>
                <SiXaml />
                <h4>XAML</h4>
              </Card>
              <Card>
                <FaXbox />
                <h4>Kinect</h4>
              </Card>
              <Card>
                <SiWindows />
                <h4>Kinect SDK</h4>
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
    font-size: 1.5em;
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
display: flex;
width: 100%;
justify-content: flex:start;
align-items:center;
@media (max-width: 1050px) {
  flex-direction:column;
  justify-content:center;
  text-align:center;
  img{
    order:2;
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
  flex-direction:column;
  justify-content:center;
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

export default Kinect;
