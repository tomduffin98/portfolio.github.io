import React from "react";
import styled from "styled-components";
import ProjectHeader from "./ProjectHeader";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "react-reveal/withReveal";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiSpring, SiPostman } from "react-icons/si";
import img from "./paylist/payone.png";

function Paylist({ text }) {
  return (
    <KinectCont>
      <KinectText>
        <Fade up>
          <ProjectHeader text={text} />
        </Fade>
        <SliceRight2>
          <PText className="right">
            <p>
              The high level goal of this application was to create a RESTFUL
              API that could perform CRUD operations to allow a business to
              manage their invoices easier. For example, sorting by paid,
              unpaid, business name, date due, date recieved etc.
            </p>
            <p>
              Multiple AWS services were utilised to offer a scalable solution.
              As seen in the UML diagram these included an S3 storage bucket,
              the SES email service and PostgreSQL database hosted on AWS.
            </p>
            <p>
              This project was completed as a group at university and therefore
              an agile, CI/CD approach was used via Git and Jira. By often
              meeting with the client we were able to deliver a useful service
              with the correct functionality.
            </p>
            <p>
              Integration and Unit testing was implementing via the Mockito
              Framework to ensure all API endpoints worked as expected.
            </p>
          </PText>
          <img src={img} />
        </SliceRight2>
        <Fade>
          <IconFooter>
            <h3>TECH STACK</h3>
            <Cards>
              <Card>
                <FaJava></FaJava>
                <h4>Java</h4>
              </Card>
              <Card>
                <FaAws></FaAws>
                <h4>AWS</h4>
              </Card>
              <Card>
                <SiPostgresql />
                <h4>PostgreSQL</h4>
              </Card>
              <Card>
                <SiSpring />
                <h4>Spring Boot</h4>
              </Card>
              <Card>
                <SiPostman />
                <h4>PostMan</h4>
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
    font-size: 1.2em;
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
  @media (max-width: 768px) {
    p {
      font-size: 1.2em;
      line-height: 1.5em;
      width: 100%;
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
  img{
    order: 2;
  }
    flex-direction:column;
    justify-content:center;
    text-align:center;
}
@media (max-width: 768px) {

  img {
    height:auto;
    max-width:90%;
  }
  margin-top:1.5vh;

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
@media (max-width: 768px) {

  img {
    height:auto;
    max-width:90%;
  }
  margin-top:1.5vh;

}
`;

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
  @media (max-width: 768px) {
    h3 {
      font-size: 1em;
    }
    h4 {
      font-size: 0.6em;
    }
    svg {
      font-size: 3em;
      margin: auto 12px auto 12px;
    }
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

const SliceRight2 = withReveal(SliceRight, <Fade left />);
const SliceLeft2 = withReveal(SliceLeft, <Fade right />);

export default Paylist;
