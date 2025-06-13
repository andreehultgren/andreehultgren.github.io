import styled from "styled-components";
import type { ReactNode, CSSProperties } from "react";

interface StackProps {
  direction?: "row" | "column";
  spacing?: number;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  children?: ReactNode;
  style?: CSSProperties;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ spacing }) => (spacing ? `${spacing * 8}px` : 0)};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;

export default function Stack({
  direction = "column",
  spacing = 0,
  alignItems,
  justifyContent,
  children,
  style,
}: StackProps) {
  return (
    <StyledStack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={style}
    >
      {children}
    </StyledStack>
  );
}
