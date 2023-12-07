import React from 'react';
import {FlexWrapper} from "components/FlexWrapper";
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Container} from "components/container/Container";
import {Theme} from "styles/Theme";


export const AboutMe = () => {

    return (
        <StyledAboutMe>
            <Container>
                <TitleSection>
                    About me
                </TitleSection>
                <FlexWrapper align={"flex-start"} wrap={"wrap"}>
                    <TextSection>
                        Coached 4 junior designers in ARIA and A11y accessibility standards. This lead to 100% of projects created to be accessible for all disabled users.
                        Created and oversaw wireframe designs from client requests.
                        Led transition from firebase to AWS, saving company $3,700+ monthly and increasing load speeds by an average of 38%.
                        Created documentation to teach new team members company standards and best practices in React.js and Node.js. This shortened learning time by an average of 16 days.
                        Addressed complex issues with real-time lead prioritization using Websocket connectivity.
                    </TextSection>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};


const StyledAboutMe = styled.section`
  display: flex;
  align-content: flex-start;

`


const TextSection = styled.p`

  position: relative;
  max-width: 843px;
  color: ${Theme.colors.font};
  font-size: 18px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.72px;
  margin: 20px 0;


  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    border-radius: 2px;
    background: ${Theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: -18px;
  }
}


`
