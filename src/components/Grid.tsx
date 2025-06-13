import type { HTMLAttributes } from "react";
import styled from "styled-components";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spacing?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const getWidth = (value?: number) =>
  value ? `${(value / 12) * 100}%` : undefined;

const StyledGrid = styled.div<GridProps>`
  box-sizing: border-box;
  display: ${({ container, item }) =>
    container ? "flex" : item ? "block" : undefined};
  flex-wrap: ${({ container }) => (container ? "wrap" : undefined)};
  gap: ${({ spacing }) => (spacing ? `${spacing * 8}px` : undefined)};
  ${({ item, xs }) =>
    item && xs
      ? `flex-basis: ${getWidth(xs)}; max-width: ${getWidth(xs)};`
      : ""}
  @media (min-width: ${breakpoints.sm}px) {
    ${({ item, sm }) =>
      item && sm
        ? `flex-basis: ${getWidth(sm)}; max-width: ${getWidth(sm)};`
        : ""}
  }
  @media (min-width: ${breakpoints.md}px) {
    ${({ item, md }) =>
      item && md
        ? `flex-basis: ${getWidth(md)}; max-width: ${getWidth(md)};`
        : ""}
  }
  @media (min-width: ${breakpoints.lg}px) {
    ${({ item, lg }) =>
      item && lg
        ? `flex-basis: ${getWidth(lg)}; max-width: ${getWidth(lg)};`
        : ""}
  }
  @media (min-width: ${breakpoints.xl}px) {
    ${({ item, xl }) =>
      item && xl
        ? `flex-basis: ${getWidth(xl)}; max-width: ${getWidth(xl)};`
        : ""}
  }
`;

export default function Grid(props: GridProps) {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
}
