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
                        The long barrow was built on land previously inhabited in the Mesolithic period.
                        It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in
                        length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated
                        human remains were placed within this chamber
                        during the Neolithic period, representing at least nine or ten individuals.
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
