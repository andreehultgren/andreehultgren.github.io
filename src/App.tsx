import {
  CloudPage,
  LandingPage,
  ProfilePage,
  SkillsPage,
  FrontendPage,
  BackendPage,
  DatabasePage,
} from "src/pages";
import { interpolateColor } from "./utils/interpolateColor";

const pages = [
  LandingPage,
  ProfilePage,
  SkillsPage,
  FrontendPage,
  BackendPage,
  DatabasePage,
  CloudPage,
];

const startColor = "#203040";
const endColor = "#2065B0";

function App() {
  return (
    <>
      {pages.map((PageComponent, i) => {
        const t1 = i / pages.length;
        const t2 = (i + 1) / pages.length;
        const color1 = interpolateColor(startColor, endColor, t1);
        const color2 = interpolateColor(startColor, endColor, t2);
        return (
          <PageComponent
            key={`page-${i + 1}`}
            startColor={color1}
            endColor={color2}
          />
        );
      })}
    </>
  );
}

export default App;
