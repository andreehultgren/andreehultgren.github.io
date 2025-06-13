import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function ProfilePage({ startColor, endColor }: Props) {
  return (
    <Page
      id="profile"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
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
  );
}
