import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./style.css";

export default function Portfolio() {
  return (
    <div className="container">
      <PortfolioItem
        left
        title="Skyqraft map"
        description="I have designed and developed the GIS system at Skyqraft from scratch. It has a plethora of functionality such as export tools, pdf generation, upload tools, cloud pipeline triggers, filters and much much more."
      >
        <a href="https://map.skyqraft.com">
          <img src="/skyqraft.png" alt="skyqraft" />
        </a>
      </PortfolioItem>
      <PortfolioItem
        right
        title="Potree customization"
        description="I have built upon the Potree JavaScript plugin to enable real-time loading of lidar data. This involves an automatic pipeline of parsing of lidar files, loading them onto the website and near-instant loading. The pointcloud is rendered progressively as a result of the potree algorithm. I have also adjusted their WebGL Shaders to allow visualisation of a custom built real-time classification"
      >
        <a href="https://lidar.skyqraft.com">
          <img src="/lidar.png" alt="lidar" />
        </a>
      </PortfolioItem>
      <PortfolioItem
        left
        title="Christmas riddle"
        description="Every year, I make a puzzle for my family to solve. Whoever is able to solve the puzzle wins a special price. The challenge is 2021 was a tricky puzzle which is solved by taking a photo while moving the camera."
      >
        <a href="https://andreehultgren.github.io/christmas_2021/">
          <img src="/christmas.png" alt="christmas" />
        </a>
      </PortfolioItem>
    </div>
  );
}
