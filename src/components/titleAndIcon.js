import { Link } from "react-router-dom";
import styled from "styled-components";
// import { motion } from "framer-motion";

// const transition = { duration: 3, yoyo: 300, ease: "easeInOut" };

const TitleAndIconContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const TitleAndIcon = () => {
  return (
    <TitleAndIconContainer to="/">
      <div className="logo fs-1">
        Jennifer Zhang
        </div>
    </TitleAndIconContainer>
  );
};
