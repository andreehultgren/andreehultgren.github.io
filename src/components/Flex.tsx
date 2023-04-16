import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const CenteredRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const CenteredColumn = styled(Column)`
  justify-content: center;
  align-items: center;
`;
