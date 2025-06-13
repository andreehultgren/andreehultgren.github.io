import React from "react";
import { LandingText } from "../components/Text";
import { CenteredColumn } from "../components/Flex";
import { Row } from "../components/Flex";
import AWSIcon from "../icons/AWSIcon";
import { Page } from "../components/Page";

type Props = {
  startColor: string;
  endColor: string;
};

export default function CloudPage({ startColor, endColor }: Props) {
  return (
    <Page
      id="frontend"
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
      }}
    >
      <CenteredColumn style={{ height: "100%" }}>
        <LandingText>Cloud System</LandingText>
        <Row style={{ gap: 80 }}>
          <CenteredColumn>
            <AWSIcon />
          </CenteredColumn>
        </Row>
      </CenteredColumn>
    </Page>
  );
}
