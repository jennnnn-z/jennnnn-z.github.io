import React from 'react';
import styled from 'styled-components';
import Lottie from "lottie-react";
import { DotLottiePlayer } from '@dotlottie/react-player';
 
const Hero = styled.div`
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    height: min-content; /* 776px */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px 100px 100px;
    background-color: var(--dark_blue, #153243);
    min-height: 100vh;
    overflow: hidden;
    z-index: 1;
    position: relative;
    align-content: center;
    flex-wrap: nowrap;
    gap: 0;
    border-radius: 0px 0px 0px 0px;
`;

const Name = styled.text`
flex-shrink: 0;
width: 1000px;
height: auto; /* 97px */
white-space: pre;
position: relative;
font-weight: 700;
font-style: normal;
font-family: "Unbounded", sans-serif;
color: var(--lighter_blue, #284b63);
font-size: 99.45449836420218px;
letter-spacing: 0em;
text-transform: uppercase;
line-height: 1.1;
text-align: center;
`

const Home = () => {
    return (
        <Hero>
            <Name>Jennifer Zhang</Name>
            <div>
                <DotLottiePlayer
                    src="https://lottie.host/1d2ac87f-fa4a-4fd9-89b0-624da7c26017/7gDd1MBonF.lottie"
                    autoplay
                    loop
                >
                </DotLottiePlayer>
            </div>
        </Hero>
    );
};
 
export default Home;