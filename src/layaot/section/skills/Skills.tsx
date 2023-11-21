import React from 'react';
import styled from "styled-components";
import {Skill} from "layaot/section/skills/skill/Skill";
import {TitleSection} from "components/TitleSection";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/container/Container";



const SkillsMap =["html","css","JAVACRIPT","typescript", "redux","styled Component","react","git"]

export  const Skills = () => {


    return (
        <StyledSkills>
           <Container>
               <TitleSection>
                   Skills
               </TitleSection>
               <FlexWrapper wrap={"wrap"} justify={"space-between"} >
                   {SkillsMap.map((el,index)=>{
                       return (
                           <SkillWrapper key={index}>
                               <Skill  iconId={el} />
                           </SkillWrapper>
                       )
                   })}
               </FlexWrapper>
           </Container>
        </StyledSkills>
    );
};

const StyledSkills =styled.section`
  display: flex;
`

const SkillWrapper=styled.div`
  
 margin: 60px;

`