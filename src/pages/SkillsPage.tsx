import { LandingText, LandingTextSmall } from "src/components/Text";
import { CenteredColumn } from "src/components/Flex";
import { GradientPage } from "src/components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function SkillsPage({
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
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>What are my skills?</LandingText>
        <LandingTextSmall>
          What do I know? <br />
          What am I capable of? <br />
        </LandingTextSmall>
      </CenteredColumn>
    </GradientPage>
  );
}
