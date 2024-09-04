import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Finius"
              description="Financially Genius is a platform designed to offer in-depth financial education through four core pillars: budgeting, saving, investing, and financial planning. Users can gain knowledge through a variety of articles, blogs, and videos, while also engaging with our interactive training simulator built with Webgl, providing an immersive and interactive learning experience on the website. "
              ghLink="https://github.com/Amisha20223/FINIUS"
              demoLink="https://finius-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Billing System "
              description="• Crafted a comprehensive billing system using JavaScript and React.Produced a billing solution supporting 4+ payment gateways, boosting customer satisfaction by 30% postimplementation"
              ghLink="https://github.com/Amisha20223/BillingSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ACITEWEBPORTAl"
              description="An online college portal designed for curriculum development, allowing colleges to track and share updates on their customized curriculum designs. Each college can submit their unique curriculum approach to the portal, 
              which will collect and analyze the data. The system then identifies the most suitable 
              curriculum design to be adopted by all participating colleges. "
              ghLink="https://github.com/Amisha20223/AICTEWEBPORTAL"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather Web "
              description="Used an API to forecast the weather of any region in India."
              ghLink="https://github.com/Amisha20223/Practice-Project"
              demoLink="https://amisha20223.github.io/Practice-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Food App"
              description="Just a Food App website for Practice"
              ghLink="https://github.com/Amisha20223/FOOD"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Churn Data Analyisis Using Power BI"
              description="The objective of this analysis is to 
              leverage Power BI to visualize customer churn across different segments, identify key factors 
              contributing to churn, predict future churn, and provide actionable insights for targeted 
              interventions to retain at-risk customers. "
              ghLink="https://github.com/Amisha20223/Chrundata"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
