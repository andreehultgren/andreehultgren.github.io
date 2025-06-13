import { LandingText } from "src/components/Text";
import { CenteredColumn } from "../components/Flex";
import Colored from "../components/Colored";
import { GradientPage } from "src/components";

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
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>Andree Hultgren</LandingText>

        <LandingText>
          <Colored>{"<"}</Colored>
          Full stack developer
          <Colored>{"/>"}</Colored>
        </LandingText>
        <p style={{ color: "white" }}>{"(Click or scroll to navigate)"}</p>
      </CenteredColumn>
    </GradientPage>
  );
}
