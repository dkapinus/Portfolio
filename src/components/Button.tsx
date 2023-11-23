import React from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";

export const Button = styled.button`

  color: #252728;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  
  
  border-radius: 6px;
  background:${Theme.colors.accent};
  padding: 12px 20px 13px 20px;
  gap: 10px;

  :hover {
    cursor: pointer;
  }
`