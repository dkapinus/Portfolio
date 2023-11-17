import React from 'react';
import styled from "styled-components";

const Menu = () => {

    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

export default Menu;

const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`