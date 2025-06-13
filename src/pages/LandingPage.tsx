import { LandingText } from "src/components/Text";
import { CenteredColumn } from "../components/Flex";
import Colored from "../components/Colored";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function LandingPage({ startColor, endColor }: Props) {
  return (
    <Page
      id="home"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
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
  );
}
