import React from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";

export const Button = styled.button`
  border-radius: 6px;
  background:${Theme.colors.accent};
  padding: 12px 20px 13px 20px;

  :hover {
    cursor: pointer;
  }
`