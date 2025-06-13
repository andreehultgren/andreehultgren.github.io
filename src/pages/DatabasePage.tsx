import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import PostgresIcon from "../icons/PostgresIcon";
import MongoDBIcon from "../icons/MongoDBIcon";
import { GradientPage } from "src/components";

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
  return (
    <GradientPage
      startColor={startColor}
      endColor={endColor}
      pageId={pageId}
      nextId={nextId}
    >
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>Databases</LandingText>
        <Row style={{ gap: 80 }}>
          <CenteredColumn>
            <PostgresIcon />
            <LandingTextSmall>PostgreSQL</LandingTextSmall>
          </CenteredColumn>
          <CenteredColumn>
            <MongoDBIcon />
            <LandingTextSmall>MongoDB</LandingTextSmall>
          </CenteredColumn>
        </Row>
      </CenteredColumn>
    </GradientPage>
  );
}
