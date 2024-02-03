import React, { useEffect, useState }  from "react";
import '../styles.scss';
import FilterButton from '../components/FilterButton';
import ProjectList from '../components/ProjectList';
import { Container, Row, Col } from 'react-bootstrap';



const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filterSelection = (category) => {
    if (category === "all") {
      setFilter("all");
    }
    else if (category !== "code" && category !== "uiux") {
      setFilter("other");
    } else {
      setFilter(category);
    }
  };

  const categories = [
    "all",
    "code",
    "uiux",
    "other",
  ];

  return (
    <section id="projects" className="bg-dark">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="section-title text-primary">Projects</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="d-flex justify-content-center gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                filterSelection={filterSelection}
                currentFilter={filter}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <ProjectList filter={filter} />
        </Row>
        {/* Add more rows and columns as needed... */}
      </Container>
    </section>
  );
};

export default Projects;
