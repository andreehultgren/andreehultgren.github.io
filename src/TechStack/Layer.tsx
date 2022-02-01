import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

type Props = {
  data: {
    id: number;
    title: string;
    color: string;
    content: any;
  };
  zIndex: number;
  order: number;
};

export default function Layer({ data, zIndex, order }: Props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id={`${data.id}`}
      className="layer"
      style={{
        background: data.color,
        zIndex,
        width:
          0.25 *
          Math.min(
            (windowDimensions.width < 750 ? 1.5 : 1) * windowDimensions.width,
            1100
          ),
        height:
          0.25 *
          Math.min(
            (windowDimensions.width < 750 ? 1.5 : 1) * windowDimensions.width,
            1100
          ),
        borderRadius:
          0.05 *
          Math.min(
            (windowDimensions.width < 750 ? 1.5 : 1) * windowDimensions.width,
            1100
          ),
        marginTop: -(order > 0
          ? 0.19 *
            Math.min(
              (windowDimensions.width < 750 ? 1.4 : 1) * windowDimensions.width,
              1100
            )
          : 0),
      }}
    ></div>
  );
}
