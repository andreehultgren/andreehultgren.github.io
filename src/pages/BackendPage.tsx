import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import PythonIcon from "../icons/PythonIcon";
import RustIcon from "../icons/RustIcon";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function BackendPage({ startColor, endColor }: Props) {
  return (
    <Page
      id="frontend"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
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
  );
}
