import Hero from "./components/Hero/Hero";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/projects";
import About_me from "./components/About-me/About-me";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import "./index.css"

function app(){
  return(
    <div className="fondo">
       <div className="content">
        <div className="column-one">  
          <Hero />
          <Skill />
          <Projects />
        </div>
        <div className="column-tow">  
          <About_me />
          <Experience />
          <Contact />
        </div>
      </div>
      <div className="complement">

      </div>
    </div>
  );
}

export default app;