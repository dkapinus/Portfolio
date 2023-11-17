import React from 'react';
import styled from "styled-components";
import {Skill} from "layaot/section/skills/skill/Skill";
import {TitleSection} from "components/TitleSection";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/container/Container";



const SkillsMap =["html","css","js","ts", "redux","styledComponent","react","git"]

export  const Skills = () => {


    return (
        <StyledSkills>
           <Container>
               <TitleSection>
                   Skills
               </TitleSection>
               <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"center"}>
                   {SkillsMap.map((el,index)=>{
                       return (
                           <div key={index}>
                               <Skill  iconId={el} />
                           </div>
                       )
                   })}
               </FlexWrapper>
           </Container>
        </StyledSkills>
    );
};

const StyledSkills =styled.section`
 
  min-height: 100vh;
`