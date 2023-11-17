import React from 'react';
import styled from "styled-components";
import mayPhoto from "assets/images/photo_2023-10-16-15.23.22-_1_ (1).png"
import {FlexWrapper} from "components/FlexWrapper";
import {Theme} from "styles/Theme";
import {Container} from "components/container/Container";

export const Main = () => {

    return (
        <StyledMain>
           <Container>
               <FlexWrapper align={"center"} justify={"space_around"} >
                   <div>
                       <MainTitle>WEB DEVELOPER</MainTitle>
                       <Name>John Doe</Name>
                       <MainText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                           sunt.</MainText>
                       <MainButton>Contact Me</MainButton>
                   </div>

                   <MainImage src={mayPhoto} alt=""/>
               </FlexWrapper>
           </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
 
  min-height: 100vh;
 
`

const MainImage =styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle =styled.h1 `
    
`

const Name =styled.h2`
`

const MainText =styled.p`
`

const MainButton = styled.button`
  border-radius: 6px;
  background:${Theme.colors.accent}
`
