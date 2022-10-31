import React from 'react';
import { MyButton } from './buttonStyle';

const button = ({ btnId, btnLink, text}) => {
  return (
    <MyButton>
        <a href = {btnLink} target ='_blank' rel = 'noreferrer' id={btnId}>
            {text}
        </a>
    </MyButton>
  );
};

export default button;