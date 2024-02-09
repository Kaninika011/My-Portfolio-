import React from "react";
import { Row, Col, Tabs, Tab, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/images/proj-img1.png";
import projImg2 from "../assets/images/proj-img2.png";
import projImg3 from "../assets/images/proj-img3.png";
import projImg4 from "../assets/images/proj-img4.png";
import projImg5 from "../assets/images/proj-img5.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  const projects = [
    {
      title: "CRUD Management Tool",
      description: "React, Node.js, Express",
      imgUrl: projImg1,
    },
    {
      title: "Netflix-Clone",
      description: "Next.js, MongoDB, Prisma",
      imgUrl: projImg2,
    },
    {
      title: "Dashboard-UI",
      description: "React",
      imgUrl: projImg3,
    },
    {
      title: "Name-Information Retrieval App",
      description: "Next.js",
      imgUrl: projImg4,
    },
    {
      title: "Valentine-app",
      description: "React",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> A selection of my fun projects, each crafted with passion and showcasing a variety of tech stacks </p>
                  <Tabs justify variant="pills" defaultActiveKey="tab-1" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Tab eventKey="tab-1" title="Tab1">
                      <Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        {projects.slice(0, 3).map((project, index) => { // Rendering projects 1, 2, 3
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })}
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-2" title="Tab2">
                      <Row>
                        {projects.slice(3).map((project, index) => { // Rendering projects 4, 5
                          return (
                            <ProjectCard
                              key={index + 3} // Adjusting key to avoid key conflicts
                              {...project}
                            />
                          )
                        })}
                      </Row>
                    </Tab>
                  </Tabs>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
export default Projects;
