import { FormContact } from "../../components/FormContact";
import { Navbar } from "../../components/Navbar";
import { SectionsProjects } from "../../components/SectionProjects";
import "./styles.sass";

export const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="textAndButtons">
          <p className="bold">Hello, World!I&apos;m </p>
          <h1>João Carlos Ressel</h1>
          <p>
            Design enthusiast, dedicated to creating satisfying user
            experiences.
          </p>
          <div className="buttons">
            <a className="button">Read more</a>
            <a className="button">Download CV</a>
          </div>
        </div>
        <img src="" alt="" />
      </header>
      <SectionsProjects />
      <FormContact />
      <Navbar />
    </div>
  );
};
