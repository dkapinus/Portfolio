import React from "react";
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import Menu from "components/menu/Menu";
import {Container} from "components/container/Container";
import {FlexWrapper} from "components/FlexWrapper";





export const Header = () => {
    return (
        <StyledHeader>
           <Container>
               <FlexWrapper justify={"space-between"} align={"center"}>
                   <Logo/>
                   <Menu/>
               </FlexWrapper>

           </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background: rgba(4, 31, 49,0.9);
  padding: 10px  0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
 
`