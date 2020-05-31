import React from 'react';
import styled from 'styled-components'

const FooterDiv = styled.footer`
    background-color: black;
    color: white;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 5px;
    width: 100%;
`
const Footer = () =>{
    return(
            <FooterDiv>
                <span>Richard Wang @ 2020</span>
            </FooterDiv> 
    )
}
export default Footer;