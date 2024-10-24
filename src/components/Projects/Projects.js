import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpeg";
import editor from "../../Assets/Projects/editor.jpeg";
import sales from "../../Assets/Projects/sales.jpeg";
import farmer from "../../Assets/Projects/farmer.jpeg";
import weather from "../../Assets/Projects/weather.jpeg";
import event from "../../Assets/Projects/event.jpeg";


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
              imgPath={event}
              isBlog={false}
              title="Event Website"
              description="An event management system streamlines the planning, scheduling, and execution of events, including registration. It ensures a seamless experience for both organizers and attendees."
              ghLink="https://github.com/alimausmani/event-management-system"
              demoLink="https://event-management-system-coral.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Website"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/alimausmani/Weather-Website"
              demoLink="https://weatherwebsite-kf1cbnxqz-alimausmanis-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmer}
              isBlog={false}
              title="Farmland Website"
              description="Created a user-friendly Farmland Website to help farmers access vital resources like crop market prices, sustainable farming tips, and agricultural news."
              ghLink="https://github.com/alimausmani/farmland-website"
              demoLink="https://farmland-website.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales Management"
              description="This Single Page Application features a secure login system with a persistent dark theme toggle and tabs for managing Active and Completed Sale Orders. Users can create new sales via a modal form and edit existing orders, ensuring streamlined and efficient sales management."
              ghLink="https://github.com/alimausmani/sales-management"
              demoLink="https://ddd-five-coral.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Code Editor"
              description="An online code editor that allows users to write HTML, CSS, and JavaScript code and view the live output in real time. This project aims to help developers experiment with front-end technologies in a web-based environment, without the need to install anything locally."
              ghLink="https://github.com/alimausmani/online-code-editor"
              demoLink="https://online-code-editor-mu-jade.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="A To-Do List is a tool used to organize tasks, prioritize activities, and keep track of tasks that need to be completed. It typically allows users to add, edit, and remove tasks, mark them as completed, and sometimes categorize them or set deadlines. Sorting features may be included to prioritize tasks based on due dates, importance, or completion status."
              ghLink="https://github.com/alimausmani/todo_list_react"
              demoLink="https://to-do-list-psi-three-42.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
