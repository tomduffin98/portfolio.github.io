import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import Rotate from "react-reveal/Rotate";

function Education() {
  return (
    <Container>
      <BoxAni style={{ border: "solid rgba(0, 255, 255, 1) 3px" }}>
        <Background className="arch" />
        <Text>
          <h1 className="arch-header">COMPUTER ARCHITECTURE</h1>
          <p>
            This module allowed me to gain a good understanding of how modern
            machines operate, including:
            <ul>
              <li>
                An awareness of the evolution of various computer architectures
              </li>
              <li>
                Delivering optimal applications in terms of memory access, being
                mindful of the memory hierachy to allow for fast applications.
              </li>
              <li>
                How to control registers with assembly langauge, and abstracting
                up to C to control process tables of execution and threading.
              </li>
              <li>
                Concurrent computing, where I developed a concurrent image
                processing game by splitting up the image to be processed by
                different threads or workers, programmed in GO.
              </li>
            </ul>
          </p>
        </Text>
      </BoxAni>
      <BoxAni style={{ border: "solid rgba(0, 255, 255, 1) 3px" }}>
        <Background className="data" />
        <Text>
          <h1 className="data-header">DATA STRUCTURES AND ALGORITHMS</h1>
          <p>
            Good choices of data structures and algorithms within an application
            can lead to fast, lean & less resource intensive systems.
            <ul>
              <li>
                An awareness of which data strucutres are suitable for certain
                functionality
              </li>
              <li>
                Big O Notation, being able to analyse algorithms and their
                relative runtime
              </li>
              <li>
                Common design issues and how they can be solved with popular
                algorithms (Dijkstas shortest path, etc)
              </li>
              <li>
                Experience implementing various data strucutres in low level
                languages, and knowledge of how popular data structures work in
                higher level languages - Dictionaries, linked lists, arrays.
              </li>
            </ul>
          </p>
        </Text>
      </BoxAni>
      <BoxAni style={{ border: "solid rgba(0, 255, 255, 1) 3px" }}>
        <Background className="code" />
        <Text>
          <h1 className="code-header">PROGRAMMING</h1>
          <p>
            I have had the chance to explore various coding paradigms
            <ul>
              <li>
                Experience with imperative languages (C, Java, C++), where a
                sequence of commands can be executed to achieve the desired
                functionality. Experience with OOP in Java to encapsulate
                functionality adherring to{" "}
                <a
                  target="_blank"
                  href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
                >
                  SOLID
                </a>{" "}
                principles.
              </li>
              <li>
                Experience of Functional programming with Haskell. No side
                effects of code, statically typed & therefore variable types are
                known at compile time
              </li>
              <li>
                Experience of Concurrent computing with Go. Using pipes to
                control which processes should be executing or blocking.
                Splitting processes into multiple slices to be dealt with by
                created workers.
              </li>
            </ul>
          </p>
        </Text>
      </BoxAni>
    </Container>
  );
}

export default Education;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  &.arch {
    background-image: url("images/education/arch.jpg");
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.15;
  }
  &.code {
    background-image: url("images/education/code.png");
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
  }
  &.data {
    background-image: url("images/education/data.jpg");
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.45;
  }
`;

const Transbox = styled.div``;

const Card = styled.div`
  width: 50%;
  height: auto;
  margin: 3% auto 0 auto;
  position: relative;
  //border:
  border-radius: 2%;
`;

const Text = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  font-size: 1.15em;
  line-height: 1.75em;

  position: relative;
  p {
    text-align: left;
    width: 80%;
    margin: 0 auto 0 auto;
    a {
      font-weight: bold;
      color: rgba(0, 255, 255, 1);
    }
  }
  ul {
    margin-left: 3%;
    padding: 0;
    li {
      line-height: 2em;
    }
  }
  h1 {
    text-align: center;
  }
`;

const BoxAni = withReveal(Card, <Fade up />);
