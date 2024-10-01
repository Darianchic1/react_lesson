import "./Projects.css";
import Button_circle from "../Button_circle/Button_circle";
import Accent from "../../assets/images/accent.svg";
import Usual from "../../assets/images/Usual.svg";
import Project from "../Project/Project";
import First_img from '../../assets/images/first_img.jpg'
import Second_img from '../../assets/images/second_img.jpg'
import Third_img from '../../assets/images/third_img.jpg'

function Projects() {
  return (
    <div className="projects_container">
      <div className="project_top">
        <p className="h_projects">
          Browse our selected projects and learn more about our work
        </p>
        <div className="button_project">
          <Button_circle type="Usual" svg={Usual}></Button_circle>
          <Button_circle type="Accent" svg={Accent}></Button_circle>
        </div>
      </div>
      <div className='projects_card'>
        <Project article='Red Finger Building' disc='Business Centers' img={First_img}/>
        <Project article='Cubes Building' disc='Business Centers' img={Second_img}/>
        <Project article='The Pencil Building' disc='Stores & Malls' img={Third_img}/>
      </div>
    </div>
  );
}

export default Projects;
