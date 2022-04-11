import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaJs,
  FaCss3,
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";
import prof from "./prof_img.png";

function Home() {
  return (
    <Container>
      <Wrapper>
        <DescContainer>
          <PImage>
            <Fade left>
              <AnimatePic>
                {/* <img src="images/prof_img.png" /> */}
                <img src={prof} />

                <MyLinks>
                  <CardWrapper>
                    <LinkedIn className="card">
                      <a
                        href="https://www.linkedin.com/in/tom-duffin-5664b8236/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <FaLinkedin />
                        LINKEDIN
                      </a>
                    </LinkedIn>
                  </CardWrapper>

                  <CardWrapper>
                    <Github className="card">
                      <a
                        href="https://github.com/tomduffin98"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <FaGithub />
                        GITHUB
                      </a>
                    </Github>
                  </CardWrapper>
                </MyLinks>
              </AnimatePic>
            </Fade>
          </PImage>
          <Fade right>
            <AnimateText>
              <Desc>
                <p className="reqLine">
                  <span className="hi-tom">
                    Hi, I'm Tom & welcome to my portfolio
                  </span>
                </p>

                <p>
                  I graduated from the University of Bristol in 2021, obtaining
                  a Computer Science BSc.
                </p>
                <p>
                  Please navigate to the{" "}
                  <NavLink to="projects">PROJECT</NavLink> page to see my work.
                  I detail the various technologies I have worked with.
                </p>
                {/* <p className="reqLine">
                  While coding these projects, software development life cycle
                  principles were adherred to. These included: Gathering
                  requirements, software design, testing & deployment.
                </p> */}
                <p>
                  The <NavLink to="education">EDUCATION</NavLink> page outlines
                  modules I have studied that have given me a deep understanding
                  of key Computer Science concepts.
                </p>
              </Desc>
            </AnimateText>
          </Fade>
        </DescContainer>
      </Wrapper>
      <Fade up>
        <AnimateLangFooter>
          <LangFooter>
            <span>THIS PORTFOLIO WAS CREATED WITH:</span>
            <IconList>
              <FaHtml5 />
              <FaCss3></FaCss3>
              <FaJs />
              <FaReact></FaReact>
              <FaGithub></FaGithub>
            </IconList>
          </LangFooter>
        </AnimateLangFooter>
      </Fade>
    </Container>
  );
}

export default Home;

const Container = styled.div`

  min-height: 92vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align items: center;
  background: linear-gradient(#00011f, rgba(0, 4, 125, 0.5) 100%);
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 1050px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 5%;

  & .react-reveal {
    width: auto;
    height: 100%;
  }
`;

const DescContainer = styled.div`
  padding-top: 30px;
  display: flex;
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }
`;
const PImage = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-right: 10px;

  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 1050px) {
    height: auto;
    padding-right: 0px;
  }
  svg {
    font-size: 5em;
    color: white;
  }

  img {
    //max-width: 65%;
    width: 70%;
    height: auto;
    border-radius: 10%;
    //was white
    //border: solid 2px white;
    border: solid 3px rgba(0, 255, 255, 1);

    @media (max-width: 768px) {
      max-width: 100%;
      margin-top: 10px;
    }
    @media (max-width: 1050px) {
      max-width: 35%;
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1050px) {
    justify-content: center;
    align-items: center;
  }
`;
const Desc = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  flex-direction: column;
  & .hi-tom {
    font-weight: bold;
    font-size: 1.35em;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }

  align-items: flex-start;
  justify-content: flex-start;
  font-family: raleway;
  color: white;
  font-size: 1.6vw;
  text-align: left;
  p {
    text-align: top;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
    line-height: 2.75rem;
    line-height: 3.5rem;
  }
  p.reqLine {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    p {
      line-height: 2.2rem;
      font-size: 16px;
      text-align: center;
    }
    height: auto;
    width: 100%;
  }
  @media (max-width: 1050px) {
    p {
      line-height: 2.2rem;
      font-size: 16px;
      text-align: center;
    }
    height: auto;
    width: 100%;
  }
`;
const NavLink = styled(Link)`
  padding: 0px;
  // was yellow
  color: rgba(0, 255, 255, 1);
  font-size: 0.8em;
  // text-decoration: none;
  text-align: center;
  font-weight: bold;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
`;

const LangFooter = styled.div`
  span {
    display: flex;
    justify-content: center;
    font-size: 1vw;
    @media (max-width: 1050px) {
      font-size: 0.65em;
  }
  }
  @media (max-width: 1050px) {
    height: 100%;
}
  height: auto;
  color: white;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  svg {
    padding: 10px;
    font-size: 1.5em;
    @media (max-width: 1050px) {
      font-size: 1.75em;
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
`;

const MyLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    padding: 15px 15px;
  }
  span {
    color: white;
  }
`;

const CardWrapper = styled.div`
  align-self: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    // was yellow
    //color: yellow;
    color: rgba(0, 255, 255, 1);
    letter-spacing: 2px;
    font-size: 0.75em;
  }
`;

const LinkedIn = styled.div`
  align-self: center;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;
const Github = styled.div`
  align-self: center;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

const AnimatePic = styled.div`
  text-align: center;
`;

const AnimateLangFooter = styled.div`
  dipslay: flex;
`;

const AnimateText = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
