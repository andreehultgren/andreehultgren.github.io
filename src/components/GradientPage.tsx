import styled from "styled-components";

export const Page = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;

type Props = {
  startColor: string;
  endColor: string;
  pageId?: string;
  nextId?: string;
  children?: React.ReactNode;
};

export default function GradientPage({
  startColor,
  endColor,
  children,
  nextId,
  pageId,
}: Props) {
  return (
    <Page
      id={pageId}
      style={{
        background: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
      }}
      onClick={() => {
        if (!nextId) return;
        document.getElementById(nextId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }}
    >
      {children}
    </Page>
  );
}
