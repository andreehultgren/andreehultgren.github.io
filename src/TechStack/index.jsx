import React, { useState, useEffect } from "react";
import Layer from "./Layer";
import "./style.css";

const stack = [
  {
    id: 0,
    title: "Frontend",
    color: "#1BABE8",
    content: (
      <div>
        <p>
          My strongest ability when working in the frontend is my understanding
          of the JavaScript language. JavaScript is a language with many quirks
          and exceptions, that makes the language an intriguing puzzle. I have
          studied multiple advanced books convering JavaScript in a very deep
          way.
        </p>
        <p>
          I am not a particularly skilled visual designer, but I am a skilled
          programmer. I use my progamming ability to make the frontend run fast
          and smooth.
        </p>
        <p>
          My experience with frontend frameworks is primarily <b>React</b>. I
          also enjoy developing in vanilla HTML/CSS/JS, and am therefore quick
          to pick up new frameworks.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "Backend",
    color: "#18B2A6",
    content: (
      <div>
        <p>
          The backend is where my strongest skills are. I am a strong
          programmer, and therefore love developing efficient and modular
          backend code.
        </p>
        <p>
          I particularly enjoy working with Python and Java in a backend
          environment. Python is such a fantastic language for developing in a
          fast and robust way, which is why Python is my absolutely favorite
          language.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Database",
    color: "#FFA41B",
    content: (
      <div>
        <p>
          No web application is complete without a good database. Database
          management is, in my eyes, a neccesary evil. In a perfect world, data
          would be instantly accessable and lightning fast, but we have to work
          with what we've got.
        </p>
        <p>
          I am not an experienced database administrator, but I have written
          innumerable amount of SQL code. I am very proficient in structuring a
          query that will collect the desired data in an efficient way.
        </p>
        <p>
          I have worked primarily with PostgreSQL databases, where I have
          managed triggers, indexes, roles, backups and much more. I have also
          done some work with NoSQL databases like MongoDB.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Cloud Tools",
    color: "#FE5C24",
    content: (
      <div>
        <p>
          There are many tools that are neccesary for a Fullstack Developer. The
          ability to host applications in an efficient way is very important.
          I'll list some of my favorite tools and/or platforms that I use on a
          regular basis and love.
        </p>
        <ul>
          <li>Docker</li>
          <li>GitHub</li>
          <li>AWS</li>
          <li>Azure</li>
          <li>Kubernetes</li>
          <li>Jenkins</li>
        </ul>
        <p>
          There are more tools that I use on a regular basis. The above
          mentioned tools and platforms are some of the most common tools I've
          seen during my professional career that I use on a regular basis.
        </p>
      </div>
    ),
  },
];

const defaultLayer = {
  id: 0,
  title: "Tech Stack",
  color: null,
  content: (
    <div>
      <p>
        I have a very wide range of skills. I enjoy learning new languages,
        frameworks and technologies. I keep up with the latest trends to stay
        relevant in a fast-paced environment
      </p>
      <p>
        I like to work in a fullstack environment because I enjoy working
        interdisciplinary and wearing 'different hats'. This variety gives me
        very valuable insights into the development process which results in a
        smoother and more streamlined product.
      </p>
      <p>
        <b>Hover or click the figure to see more</b> of my skills as a fullstack
        developer.
      </p>
    </div>
  ),
};

export default function TechStack() {
  const [currentLayer, setCurrentLayer] = useState(defaultLayer);

  const checkForLayerHover = (e) => {
    const id = e.target.id;
    if (!!id && !isNaN(id)) {
      const id_parsed = parseInt(id);
      const hoverLayer = stack.find((layer) => layer.id === id_parsed);
      if (!!hoverLayer) {
        setCurrentLayer(hoverLayer);
      } else {
        setCurrentLayer(defaultLayer);
      }
    } else {
      setCurrentLayer(defaultLayer);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseover", checkForLayerHover);

    return () => {
      window.removeEventListener("mouseover", checkForLayerHover);
    };
  }, []);

  return (
    <div className="container split">
      <div className="stack">
        {stack
          .slice()
          .reverse()
          .map((data, i) => (
            <Layer key={i} data={data} zIndex={stack.length - i} order={i} />
          ))}
      </div>
      <div className="content">
        <h1>{currentLayer.title}</h1>
        {currentLayer.content}
      </div>
    </div>
  );
}
