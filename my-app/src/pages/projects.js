import React from "react";
import styled from 'styled-components';

const ContainerList = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 1px;
  height: min-content; /* 924px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 20px 0px 20px;
  max-width: 600px;
  flex: 1 0 0px;
  position: relative;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 40;
  border-radius: 0px 0px 0px 0px;
`

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ContainerList>
        <p> test </p>
        <p> test2 </p>
      </ContainerList>
      {/* Add some content about your projects */}
    </div>
  );
};

export default Projects;
