import React from 'react';
import {FlexWrapper} from "components/FlexWrapper";
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Container} from "components/container/Container";


export const AboutMe = () => {

    return (
        <StyledAboutMe>
            <Container>
                <TitleSection>
                    About me
                </TitleSection>
                <FlexWrapper align={"center"} justify={"space_around"} direction={"column"}>
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
min-height: 50vh;
`



const TextSection =styled.p`
    
`
