import { LandingText } from "../components/Text";
import { MongoDBIcon, PostgresIcon } from "../icons";
import { GradientPage, IconsRow, Stack } from "../components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function DatabasePage({
  startColor,
  endColor,
  pageId,
  nextId,
}: Props) {
  const icons = [
    { Icon: MongoDBIcon, label: "MongoDB" },
    { Icon: PostgresIcon, label: "PostgreSQL" },
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
        <LandingText>Databases</LandingText>
        <IconsRow icons={icons} />
      </Stack>
    </GradientPage>
  );
}
