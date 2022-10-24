import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nat from "../../Assets/Projects/nat.jpg";
import download from "../../Assets/Projects/download.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import t from "../../Assets/Projects/t.jpg";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="Personal To Do List build with Javascript, Css. Have features which allows user to check to do user ."
              ghLink="https://github.com/louatizine/ToDoList1.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nat}
              isBlog={false}
              title="Nature Project"
              description="Personal Nature Gallery build with Html, Css."  
              ghLink="https://github.com/louatizine/TestProject.git"
                            
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={t}
              isBlog={false}
              title="Travel_Agency"
              description="Travel agengy build with Java and XML .  "
              ghLink="https://github.com/louatizine/ZineTravelApp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Detection Road Signs"
              description="Detection of Road Signs build with Python . "
              ghLink="https://github.com/louatizine/TrafficS.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
