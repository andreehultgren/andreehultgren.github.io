import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function SkillsPage({ startColor, endColor }: Props) {
  return (
    <Page
      id="skills"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
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
  );
}
