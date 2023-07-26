import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion } from "framer-motion";

const transition = { duration: 2, yoyo: 300, ease: "easeInOut" }
const transition1 = { delay: 3, duration: 1.5, yoyo: 300, ease: "easeInOut" }

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 20px;
`;

const TitleAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const TitleAndIcon = () => {
  return (
    <TitleAndIconContainer to="/">
      <svg width="308" height="84" viewBox="0 0 308 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        // zhang
          d="M182.776 7.3471C182.776 3.07759 186.96 2.31264 190.711 2.03812C200.623 1.3129 198.997 11.1147 194.439 16.2425C191.83 19.1783 189.021 22.0188 185.854 24.3471C185.461 24.6363 181.816 26.7472 181.816 27.4252C181.816 28.7857 191.229 24.519 190.881 30.7857C190.328 40.7311 184.536 53.2144 175.406 58.1496C174.315 58.7393 166.317 63.1756 167.047 58.432C168.07 51.7855 173.788 45.8109 178.71 41.6578C181.353 39.4274 183.831 36.7274 186.673 34.7674C190.178 32.3504 194.082 30.1468 196.952 26.9452C201.272 22.1268 204.85 17.6549 208.079 12.0348C208.877 10.6456 210.164 8.35978 210.225 6.72584C210.232 6.54306 210.308 3.98501 209.829 4.41022C208.748 5.37196 208.181 8.64491 207.683 9.88864C206.311 13.3183 205.319 16.8692 203.222 19.9418C201.304 22.7512 199.539 25.9894 198.138 29.0913C197.853 29.7235 195.379 33.8349 197.009 33.0448C202.376 30.4426 205.128 24.3098 209.604 20.5631C211.095 19.3141 211.133 18.4487 213.162 18.5299C214.577 18.5865 214.291 21.6905 214.291 22.5963C214.291 25.6436 212.677 30.2696 217.736 28.583C220.888 27.5325 224.114 24.5556 226.378 22.201C228.924 19.5532 225.416 18.3651 223.723 20.3654C221.849 22.5799 220.228 29.1821 225.22 26.4086C226.716 25.5775 228.543 24.9 229.738 23.6129C230.531 22.7594 230.433 21.2724 231.32 20.5631C231.947 20.0614 231.574 19.4561 231.574 21.0996C231.574 22.4584 231.359 24.0283 231.602 25.3638C232.023 27.6785 237.281 28.4027 239.227 28.1595C243.479 27.6279 244.933 22.7789 248.32 20.8737C251.944 18.8348 251.215 22.9608 250.127 25.1378C249.747 25.8974 248.913 27.5107 248.913 28.3854C248.913 28.4101 253.219 26.0216 253.657 25.6462C256.68 23.0545 258.648 20.4446 262.58 19.4335C266.069 18.5364 263.567 24.7782 265.009 26.7192C265.756 27.7246 269.037 27.1945 270.092 27.1711C272.169 27.1249 273.649 25.3635 275.175 24.1212C275.667 23.7206 279.316 20.2745 277.208 20.676C274.411 21.2088 273.148 22.2971 273.255 25.1378C273.44 30.0426 277.37 29.711 279.242 26.1545C280.277 24.1875 279.828 27.5432 279.75 28.2442C278.512 39.3855 274.384 50.419 269.753 60.5499C266.854 66.8927 263.62 73.556 259.418 79.1596C258.541 80.3279 256.758 82.7481 254.956 82.4636C251.488 81.916 250.027 77.6986 250.099 74.726C250.21 70.1303 252.612 65.9716 255.21 62.329C261.94 52.8933 270.639 45.2535 279.411 37.789C287.392 30.998 295.064 24.003 302.567 16.6943C303.842 15.4524 305.256 14.3239 306.295 12.9385" 
          stroke="black" 
          stroke-width="2" 
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition1}
        />
        <motion.path 
        // jennifer
          d="M48.7704 28.8588C47.9255 30.5485 40.3493 29.1312 38.9713 28.8305C35.6006 28.0951 34.6028 26.3923 36.4016 23.1544C39.9198 16.8216 47.1374 12.3545 52.6391 7.93347C53.9597 6.87229 56.9602 3.38047 56.6774 7.11453C56.4805 9.71277 54.4841 12.4198 53.1757 14.5132C48.1933 22.4851 42.2934 29.7906 35.978 36.7375C26.4175 47.2541 15.7417 56.7263 6.52439 67.5466C6.34318 67.7593 1.39089 72.9978 2.06259 69.9752C3.59823 63.0648 8.44223 56.1758 11.8616 50.1512C16.2727 42.3793 21.8966 34.6373 30.4995 31.6262C37.2228 29.2731 44.2706 28.6254 51.1425 26.7126C53.8239 25.9662 56.8495 24.9867 58.6823 22.7309C59.2842 21.9901 62.32 20.1237 62.2687 19.2009C62.1946 17.8672 59.1986 18.1633 58.4282 18.4385C56.8123 19.0156 56.2575 20.2845 56.4232 22.0249C56.8594 26.6047 60.4551 28.2535 64.5561 27.0232C67.6205 26.1039 69.8568 23.5298 72.0395 21.3471C73.3164 20.0702 75.657 16.6632 77.6874 16.5182C81.5776 16.2403 71.4574 29.6017 78.0545 23.4933C79.7808 21.8948 81.6481 20.2383 83.8435 19.3139C84.8937 18.8717 84.8488 22.3732 84.8602 22.872C84.9475 26.7154 87.789 27.113 91.2422 26.2043C94.2114 25.4229 97.0383 17.2706 100.335 18.2126C101.355 18.5038 99.783 24.7936 100.138 26.0348C100.573 27.5599 107.769 20.6989 108.355 20.3305C112.553 17.6944 112.817 19.8902 112.817 24.284C112.817 25.3626 112.304 27.1178 113.834 26.5714C114.905 26.1886 116.204 25.6446 116.883 24.6794C118.132 22.905 119.458 21.047 120.639 19.2292C122.092 16.9941 120.79 18.9099 120.555 20.2176C119.93 23.6871 121.513 24.284 124.762 24.284C126.8 24.284 127.387 23.019 128.688 21.6295C131.717 18.393 134.042 14.0844 136.397 10.3338C136.509 10.1552 139.193 4.25523 137.103 5.70256C135.797 6.60636 135.257 8.85988 134.561 10.1644C132.192 14.6066 129.119 18.6624 126.541 22.985C121.528 31.3935 115.341 40.8754 113.58 50.6595C113.24 52.5454 112.246 55.0271 113.438 56.8157C114.559 58.497 116.996 57.7716 117.928 56.4203C121.958 50.5771 125.538 43.6483 128.207 37.1046C129.951 32.8297 131.269 29.917 129.083 26.0913C128.905 25.7797 128.737 25.8782 129.224 26.0913C130.723 26.7472 132.443 26.8553 134.053 26.7126C135.854 26.553 138.259 26.5393 139.503 25.0182C140.648 23.6195 141.059 21.7205 141.395 19.9916C141.847 17.6698 138.674 18.9839 137.809 19.9352C135.283 22.714 139.869 30.8753 143.937 28.3505C147.791 25.9583 150.144 19.4167 151.335 15.2474C151.555 14.4804 149.1 14.4437 150.997 14.6544C152.064 14.773 155.107 15.2965 155.769 16.1793C158.38 19.6613 152.402 22.6164 153.002 26.5149C153.527 29.9326 165.037 25.8997 166.698 24.7923" 
          stroke="black" 
          stroke-width="2" 
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
    </TitleAndIconContainer>
  );
};

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color .3s, transform 300ms, font-size 100ms;

  &:hover {
    // transform: scale(1.2);
    font-size: 1.1em;
    background-color: #ddd;
  }
`;

const Header = () => {
  return (
    <Navbar>
        <NavLink to="/"><TitleAndIcon /></NavLink>
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        
    </Navbar>
  );
};

export default Header;
