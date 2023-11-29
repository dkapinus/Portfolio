import React from 'react';
import styled from "styled-components";
import {Skill} from "layaot/section/skills/skill/Skill";
import {TitleSection} from "components/TitleSection";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/container/Container";
import {Theme} from "styles/Theme";



const SkillsMap =[ {id:"html", title:"html"},
    {id:"css", title:"css"},
    {id:"JAVACRIPT", title:"JAVACRIPT"},
    {id:"typescript", title:"typescript"},
    {id:"redux", title:"redux"},
    {id:"styled Component", title:"styled Component"},
    {id:"react", title:"react"},
    {id:"git", title:"git"}]



export  const Skills = () => {


    return (
        <StyledSkills>
           <Container>
               <TitleSection>
                   Skills
               </TitleSection>
               <FlexWrapper  justify={"space-between"} wrap={"wrap"} >
                   {SkillsMap.map((el,index)=>{
                       return (
                           <SkillWrapper key={index}>
                               <Skill  Element={el} />
                           </SkillWrapper>
                       )
                   })}
               </FlexWrapper>
           </Container>
        </StyledSkills>
    );
};

const StyledSkills =styled.section`
  position: relative;
  display: flex;
  
  
  
`

const SkillWrapper=styled.div`
  
  flex: 1 1 23%;
  display: flex;
  justify-content: center;
  

  @media ${Theme.media.mobile} {
 
    flex: 1 1 32%
  }

`