import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {TitleSection} from "components/TitleSection";
import {Project} from "layaot/section/projects/project/Project";
import imageWorks from "../../../assets/images/image.jpg"
import {Container} from "components/container/Container";

export const Projects = () => {
    return (
        <StyledWork>
           <Container>
               <TitleSection>
                   Works
               </TitleSection>
               <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"center"}>
                   <Project img={imageWorks} title={"React"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                       "                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"}/>
                   <Project img={imageWorks} title={"JS"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.\n" +
                       "                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"}/>
                   <Project img={imageWorks} title={"HTML"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.\n" +
                       "                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"}/>
                   <Project img={imageWorks} title={"Redux"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.\n" +
                       "                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"}/>
               </FlexWrapper>
           </Container>
        </StyledWork>
    );
};


const StyledWork = styled.section`
  
  display: flex;

`
