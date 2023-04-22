import React from "react";
import { H2, H4, LandingText, LandingTextSmall } from "src/components/Text";
import { CenteredColumn } from "src/components/Flex";
import Colored from "src/components/Colored";
import styled from "styled-components";
import Center from "src/components/Center";
import RustSVG from "./rust.svg";
import { Row } from "src/components/Flex";
import ReactIcon from "./icons/ReactIcon";
import FlutterIcon from "./icons/FlutterIcon";
import PythonIcon from "./icons/PythonIcon";
import RustIcon from "./icons/RustIcon";
import PostgresIcon from "./icons/PostgresIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import AWSIcon from "./icons/AWSIcon";

const Page = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;

function App() {
  return (
    <>
      <Page
        id="home"
        style={{
          background: "linear-gradient(180deg, #203040 0%, #203550 100%)",
        }}
        onClick={() => {
          document.getElementById("profile")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>Andree Hultgren</LandingText>

          <LandingText>
            <Colored>{"<"}</Colored>
            Full stack developer
            <Colored>{"/>"}</Colored>
          </LandingText>
          <p style={{ color: "white" }}>{"(Click or scroll to navigate)"}</p>
        </CenteredColumn>
      </Page>

      <Page
        id="profile"
        style={{
          background: "linear-gradient(180deg, #203550 0%, #204060 100%)",
        }}
        onClick={() => {
          document.getElementById("skills")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>What is this?</LandingText>
          <LandingTextSmall>
            I want to show you my skills, <br /> I do that best by showing some
            cool features
          </LandingTextSmall>
        </CenteredColumn>
      </Page>
      <Page
        id="skills"
        style={{
          background: "linear-gradient(180deg, #204060 0%, #204570 100%)",
        }}
        onClick={() => {
          document.getElementById("frontend")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>What are my skills?</LandingText>
          <LandingTextSmall>
            What do I know? <br />
            What am I capable of? <br />
          </LandingTextSmall>
        </CenteredColumn>
      </Page>
      <Page
        id="frontend"
        style={{
          background: "linear-gradient(180deg, #204570 0%, #205080 100%)",
        }}
        onClick={() => {
          document.getElementById("backend")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%", gap: 40 }}>
          <LandingText>Frontend Development</LandingText>
          <Row style={{ gap: 80 }}>
            <CenteredColumn>
              <ReactIcon />
              <LandingTextSmall>React</LandingTextSmall>
            </CenteredColumn>
            <CenteredColumn>
              <FlutterIcon />
              <LandingTextSmall>Flutter</LandingTextSmall>
            </CenteredColumn>
          </Row>
        </CenteredColumn>
      </Page>
      <Page
        id="backend"
        style={{
          background: "linear-gradient(180deg, #205080 0%, #205590 100%)",
        }}
        onClick={() => {
          document.getElementById("database")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>Backend Development</LandingText>
          <Row style={{ gap: 80 }}>
            <CenteredColumn>
              <PythonIcon />
              <LandingTextSmall>Python</LandingTextSmall>
            </CenteredColumn>
            <CenteredColumn>
              <RustIcon />
              <LandingTextSmall>Rust</LandingTextSmall>
            </CenteredColumn>
          </Row>
        </CenteredColumn>
      </Page>
      <Page
        id="database"
        style={{
          background: "linear-gradient(180deg, #205590 0%, #2060A0 100%)",
        }}
        onClick={() => {
          document.getElementById("cloud")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>Databases</LandingText>
          <Row style={{ gap: 80 }}>
            <CenteredColumn>
              <PostgresIcon />
              <LandingTextSmall>PostgreSQL</LandingTextSmall>
            </CenteredColumn>
            <CenteredColumn>
              <MongoDBIcon />
              <LandingTextSmall>MongoDB</LandingTextSmall>
            </CenteredColumn>
          </Row>
        </CenteredColumn>
      </Page>
      <Page
        id="cloud"
        style={{
          background: "linear-gradient(180deg, #2060A0 0%, #2065B0 100%)",
        }}
      >
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>Cloud System</LandingText>
          <Row style={{ gap: 80 }}>
            <CenteredColumn>
              <AWSIcon />
            </CenteredColumn>
          </Row>
        </CenteredColumn>
      </Page>
    </>
  );
}

export default App;
