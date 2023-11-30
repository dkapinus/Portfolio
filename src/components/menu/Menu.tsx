import React  from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";
import {Link} from "react-scroll";


const DataHeaderMenu = [{title: "Home", href: "home"},
    {title: "Projects", href: "projects"},
    {title: "Contact", href: "contact"}]


const Menu = () => {

    return (
        <StyledMenu>
            <StyledUl>

                {DataHeaderMenu.map((el, index) => {
                    return (
                        <ListItem key={index}>
                            <LinkItem
                                activeClass="active"
                                to={el.href}
                                spy={true}
                                smooth={true}
                            >
                                {el.title}
                            </LinkItem>
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


const LinkItem = styled(Link)`

  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 500;

  position: relative;

  &:hover, &.active {
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 5px;
      position: absolute;
      background: ${Theme.colors.accent};
      bottom: -5px;
      z-index: -1;
    }
  }

 
 
  

`
const StyledUl = styled.ul`

  display: flex;
  gap: 30px;

  & > li:first-child {
    margin-right: auto;

  }

`