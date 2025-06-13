import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";

import { Row } from "../components/Flex";
import { FlutterIcon, ReactIcon } from "src/icons";
import { GradientPage } from "src/components";

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
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <CenteredColumn style={{ height: "100%", gap: 40 }}>
        <LandingText>Frontend Development</LandingText>
        <Row style={{ gap: 80 }}>
          <CenteredColumn>
            <ReactIcon />
            <LandingTextSmall>React</LandingTextSmall>
          </CenteredColumn>
          <CenteredColumn>
            <FlutterIcon />
            <LandingTextSmall>Flutter</LandingTextSmall>
          </CenteredColumn>
        </Row>
      </CenteredColumn>
    </GradientPage>
  );
}
