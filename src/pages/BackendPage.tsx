import { lazy } from "react";
import { LandingText } from "../components/Text";
import { GradientPage, Stack, IconsRow } from "src/components";

const PythonIcon = lazy(() => import("src/icons/PythonIcon"));
const RustIcon = lazy(() => import("src/icons/RustIcon"));

export default function BackendPage({
  startColor,
  endColor,
  pageId,
  nextId,
}: {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
}) {
  const icons = [
    { Icon: PythonIcon, label: "Python" },
    { Icon: RustIcon, label: "Rust" },
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
        <LandingText>Backend Development</LandingText>
        <IconsRow icons={icons} />
      </Stack>
    </GradientPage>
  );
}
