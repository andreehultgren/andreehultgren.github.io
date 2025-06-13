import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { GradientPage } from "src/components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function ProfilePage({
  startColor,
  endColor,
  nextId,
  pageId,
}: Props) {
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>What is this?</LandingText>
        <LandingTextSmall>
          I want to show you my skills, <br /> I do that best by showing some
          cool features
        </LandingTextSmall>
      </CenteredColumn>
    </GradientPage>
  );
}
