import { LandingText } from "../components/Text";
import { GradientPage, Stack } from "../components";

import styled from "styled-components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

const Colored = styled.code`
  color: #03d5e0;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
`;

export default function LandingPage({
  startColor,
  endColor,
  pageId,
  nextId,
}: Props) {
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <LandingText>Andree Hultgren</LandingText>
        <LandingText>
          <Colored>{"<"}</Colored>
          Full stack developer
          <Colored>{"/>"}</Colored>
        </LandingText>
        <p style={{ color: "white" }}>{"(Click or scroll to navigate)"}</p>
      </Stack>
    </GradientPage>
  );
}
