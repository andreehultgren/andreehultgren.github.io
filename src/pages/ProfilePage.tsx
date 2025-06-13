import { LandingText, LandingTextSmall } from "../components/Text";
import { GradientPage, Stack } from "src/components";

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
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <LandingText>What is this?</LandingText>
        <LandingTextSmall>
          I want to show you my skills, <br /> I do that best by showing some
          cool features
        </LandingTextSmall>
      </Stack>
    </GradientPage>
  );
}
