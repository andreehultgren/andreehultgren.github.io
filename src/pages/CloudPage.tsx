import { LandingText } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import { AWSIcon } from "src/icons";
import { GradientPage } from "src/components";

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
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>Cloud System</LandingText>
        <Row style={{ gap: 80 }}>
          <CenteredColumn>
            <AWSIcon />
          </CenteredColumn>
        </Row>
      </CenteredColumn>
    </GradientPage>
  );
}
