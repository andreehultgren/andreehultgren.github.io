import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Page } from "../components/Page";

import { Row } from "../components/Flex";
import ReactIcon from "../icons/ReactIcon";
import FlutterIcon from "../icons/FlutterIcon";

type Props = {
  startColor: string;
  endColor: string;
};

export default function FrontendPage({ startColor, endColor }: Props) {
  return (
    <Page
      id="frontend"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
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
  );
}
