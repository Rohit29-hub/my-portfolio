import Introduction from "./components/Introduction";
import TwoBanner from "./components/TwoBanner";
import ProjectView from "./components/ProjectView";
import Skill from './components/Skill'
import Education from "./components/Education";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <Introduction/>
      <TwoBanner/>
      <ProjectView/>
      <Skill/>
      <Education/>
      <Contact/>
    </>
  );
}
