import React from 'react';
import styled from "styled-components";
import mayPhoto from "assets/images/photo_2023-10-16-15.23.22-_1_ (1).png"
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/container/Container";
import {Button} from "components/Button";
import {Theme} from "styles/Theme";
import {Icon} from "components/icon/Icon";

export const Main = () => {

    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <MainTitle>WEB DEVELOPER</MainTitle>
                        <Name>Kapinus Dima</Name>
                        <MainText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                            sunt.</MainText>
                        <Button>Contact Me</Button>
                    </div>

                    <MainImage src={mayPhoto} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

`

const MainImage = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: #D7E5EC;
  font-family: Tinos, sans-serif;
  font-size: 20px;
  font-weight: 400;

`

const Name = styled.h2`
  font-size: 72px;
  font-weight: 600;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`

const MainText = styled.p`
  max-width: 514px;
  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0;
`


