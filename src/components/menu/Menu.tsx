import React, {useState} from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";
import {Button} from "components/Button";


const DataHeaderMenu = ["Home", "Projects", "Contact"]


const Menu = () => {
    const [isClick,setIsClick] =useState<boolean>(true)
    return (
        <StyledMenu>
            <StyledUl>

                {DataHeaderMenu.map((el, index) => {
                    return (
                        <ListItem key={index}>
                            {isClick ? <LinkItem href="">{el}</LinkItem>
                              :  <Button><LinkItem href="">{el}</LinkItem></Button>}

                        </ListItem>
                    )
                })}

            </StyledUl>
        </StyledMenu>
    );
};

export default Menu;

const StyledMenu = styled.nav`
width: 100%;
  
`

const ListItem = styled.li`
    

`



const LinkItem = styled.a`
 
  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 500;
 `
const StyledUl = styled.ul`

    display: flex;
    gap: 30px;

    & > li:first-child  {
      margin-right: auto;
     
    }
  
`