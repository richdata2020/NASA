import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-image: url(components/image.png);
    padding-bottom: 3%;
    padding-top: 3%;
    display:flex;
    flex-direction: column;
    Color: white;
    align-items: center;
    text-align: center;
    @media (max-width: 600px) {
        .headerContainer{
            padding-left: 7%;
            padding-right: 7%;
        }
    }
`;

const Header = () => {
    return (
    <HeaderDiv>
        <h1>NASA Astronomy</h1>
        <p>Welcome to Astronomy Picture of the Day, where we learn and explore our space everyday.</p>
    </HeaderDiv>
    );
};

export default Header;