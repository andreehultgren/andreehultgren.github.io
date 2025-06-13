import { LandingText } from "../components/Text";
import { FlutterIcon, ReactIcon } from "src/icons";
import { GradientPage, IconsRow, Stack } from "src/components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function FrontendPage({
  startColor,
  endColor,
  pageId,
  nextId,
}: Props) {
  const icons = [
    { Icon: ReactIcon, label: "React" },
    { Icon: FlutterIcon, label: "Flutter" },
  ];
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
        <LandingText>Frontend Development</LandingText>
        <IconsRow icons={icons} />
      </Stack>
    </GradientPage>
  );
}
