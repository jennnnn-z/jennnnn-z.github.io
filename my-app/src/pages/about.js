import React from "react";
import styled from 'styled-components';

const Text = styled.div`
    box-sizing: border-box;
    flex-shrink: 0;
    height: min-content; /* 350px */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 100px 100px 100px 100px;
    background-color: #598392;
    overflow: hidden;
    flex: 1 0 0px;
    position: relative;
    align-content: center;
    flex-wrap: nowrap;
    gap: 10em;
    border-radius: 0px 0px 0px 0px;
`;

const About = () => {
    return (
        <div>
            <Text>
                <h1>beep beep</h1>
                <p>Jennifer Zhang likes to eat. </p>
            </Text>
        </div>
    );
};
 
export default About;