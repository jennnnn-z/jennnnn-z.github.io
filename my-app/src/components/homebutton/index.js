import styled from "styled-components";


export const variant1 = styled.button`
    box-sizing: border-box;
    flex-shrink: 0;
    width: min-content; /* 40px */
    height: min-content; /* 38px */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 2.5px 5px;
    background-color: var(--dark_blue, #153243);
    position: relative;
    align-content: center;
    flex-wrap: nowrap;
    gap: 8;
    border-radius: 10px;
`;

  const homebutton = () => {
    return (
        <>
            <variant1>
                JZ
            </variant1>
        </>
    );
};

export default homebutton;