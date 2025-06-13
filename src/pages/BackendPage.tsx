import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import { PythonIcon, RustIcon } from "src/icons";
import { GradientPage } from "src/components";

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
};

export default function BackendPage({
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
        <LandingText>Backend Development</LandingText>
        <Row style={{ gap: 80 }}>
          <CenteredColumn>
            <PythonIcon />
            <LandingTextSmall>Python</LandingTextSmall>
          </CenteredColumn>
          <CenteredColumn>
            <RustIcon />
            <LandingTextSmall>Rust</LandingTextSmall>
          </CenteredColumn>
        </Row>
      </CenteredColumn>
    </GradientPage>
  );
}
