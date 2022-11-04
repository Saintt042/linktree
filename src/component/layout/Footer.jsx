import React from "react";
import zuri from '../../resources/zuri.png';
import I4G from '../../resources/I4G.png';
import styled from 'styled-components';

const Container = styled.footer`
border-top: 1px solid rgb(255, 255, 255, 0.3);
padding: 15px;
margin-top: 2rem;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 630px) {
    
        flex-direction: column;
    
    & > * {
        margin-bottom: 1.5rem;
    }
};`

const Footer = () => {
  return (
      <Container>
        <div>
          <img src={zuri} alt="zuri" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={I4G} alt="i4g" />
        </div>
      </Container>
   
  );
};

export default Footer;
