import React from "react";
import { LandingText, LandingTextSmall } from "src/components/Text";
import { CenteredColumn } from "src/components/Flex";
import Colored from "src/components/Colored";
import styled from "styled-components";

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
            What do I know? What am I capable of? <br />
            This is what I am the very best at:
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
        <CenteredColumn style={{ height: "100%" }}>
          <LandingText>Frontend Development</LandingText>
          <LandingTextSmall>
            Experienced React developer <br /> I also know flutter quite well
          </LandingTextSmall>
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
          <LandingTextSmall>
            Expert level Python developer <br /> I can do almost anything in
            Python. <br /> Websites <br /> AI <br /> Games <br /> Smart Mirrors
            <br /> <br /> You name it. I have probably done it in Python.
          </LandingTextSmall>
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
          <LandingTextSmall>
            I have mainly worked with relational databases.
            <br /> I can write any query you'd like. <br /> I am building
            experience in scaling databases.
          </LandingTextSmall>
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
          <LandingTextSmall>
            I have worked exclusively on AWS
            <br /> So if you're running GCP or Azure, I'll have to google a few
            things to get running.
          </LandingTextSmall>
        </CenteredColumn>
      </Page>
    </>
  );
}

export default App;
