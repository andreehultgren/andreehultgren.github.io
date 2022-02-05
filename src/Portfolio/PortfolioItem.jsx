import React from "react";

export default function PortfolioItem({
  children,
  title,
  description,
  left = false,
  right = false,
}) {
  return (
    <div
      className={`portfolio-item ${!!left ? "left" : !!right ? "right" : ""}`}
    >
      <div className="explanation">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
