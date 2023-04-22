import React from "react";

type Props = {};

export default function ReactIcon({}: Props) {
  return (
    <svg width="100px" height="100px" viewBox="-10.5 -9.45 21 18.9">
      <circle cx="0" cy="0" r="2" fill="#fff"></circle>
      <g stroke="#fff" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}
