import { LandingText, LandingTextSmall } from "src/components/Text";
import { GradientPage, Stack } from "src/components";

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
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <LandingText>What are my skills?</LandingText>
        <LandingTextSmall>
          What do I know? <br />
          What am I capable of? <br />
        </LandingTextSmall>
      </Stack>
    </GradientPage>
  );
}
