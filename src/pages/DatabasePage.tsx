import React from "react";
import { LandingText, LandingTextSmall } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import PostgresIcon from "../icons/PostgresIcon";
import MongoDBIcon from "../icons/MongoDBIcon";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function DatabasePage({ startColor, endColor }: Props) {
  return (
    <Page
      id="frontend"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
      }}
      onClick={() => {
        document.getElementById("cloud")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }}
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
    </Page>
  );
}
