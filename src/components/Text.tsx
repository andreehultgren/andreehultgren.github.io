import React from "react";
import styled from "styled-components";

interface IProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children?: React.ReactNode;
  color?: string;
  size?: string;
}

export const LandingText = styled.h2`
  color: white;
  font-size: 64px;
  margin: 8px;
  @media (max-width: 800px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
  @media (max-width: 420px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
  @media (max-width: 240px) {
    font-size: 16px;
  }
`;

export const LandingTextSmall = styled.h2`
  color: white;
  font-size: 48px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 18px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (max-width: 240px) {
    font-size: 12px;
  }
`;

// Create a centralized text component
export default function Text({ variant, children, color, size }: IProps) {
  const Component = styled[variant]`
    margin: 0px;
  `;
  return (
    <Component
      style={{
        color,
        fontSize: size,
      }}
    >
      {children}
    </Component>
  );
}

// And create simplified versions of the text component

export function H1(props: Omit<IProps, "variant">) {
  let outProps = {
    size: "50px",
    ...props,
  };
  return <Text {...outProps} variant="h1" />;
}
export function H2(props: Omit<IProps, "variant">) {
  let outProps = {
    size: "30px",
    ...props,
  };
  return <Text {...outProps} variant="h2" />;
}
export function H3(props: Omit<IProps, "variant">) {
  return <Text {...props} variant="h3" />;
}
export function H4(props: Omit<IProps, "variant">) {
  return <Text {...props} variant="h4" />;
}
export function H5(props: Omit<IProps, "variant">) {
  return <Text {...props} variant="h5" />;
}
export function H6(props: Omit<IProps, "variant">) {
  return <Text {...props} variant="h6" />;
}
export function P(props: Omit<IProps, "variant">) {
  return <Text {...props} variant="p" />;
}
