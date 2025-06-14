import { LandingText } from "../components/Text";
import { GradientPage, Stack } from "../components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

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
        <LandingText>More coming soon!</LandingText>
      </Stack>
    </GradientPage>
  );
}
