import { LandingText } from "../components/Text";
import { AWSIcon } from "../icons";
import { GradientPage, IconsRow, Stack } from "../components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function CloudPage({
  startColor,
  endColor,
  pageId,
  nextId,
}: Props) {
  const icons = [{ Icon: AWSIcon, label: "AWS" }];
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <Stack
        spacing={6}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <LandingText>Cloud System</LandingText>
        <IconsRow icons={icons} />
      </Stack>
    </GradientPage>
  );
}
