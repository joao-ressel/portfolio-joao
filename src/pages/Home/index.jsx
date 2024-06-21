import { FormContact } from "../../components/FormContact";
import { Navbar } from "../../components/Navbar";
import { SectionsProjects } from "../../components/SectionProjects";
import perfil from "../../assets/perfil-joao-sfundo.png";
export const Home = () => {
  return (
    <>
      <header className="header">
        <div className="textAndButtons">
          <p className="bold">Hello, World! I&apos;m </p>
          <h1>João Carlos Ressel</h1>
          <p>
            Design enthusiast, dedicated to creating satisfying user
            experiences.
          </p>
          <div className="buttons">
            <a className="button slate">Read more</a>
            <a className="button rose">Download CV</a>
          </div>
        </div>
        <div className="imgContaier">
          <img src={perfil} alt="" />
        </div>
      </header>
      <SectionsProjects />
      <FormContact />
      <Navbar />
    </>
  );
};
