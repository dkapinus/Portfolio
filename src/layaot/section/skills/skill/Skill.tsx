import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import {Theme} from "styles/Theme";
import {FlexWrapper} from "components/FlexWrapper";


type SkillsPropsType = {
    Element:ElementPropsType
}

type ElementPropsType  = {
    id:string;
    title:string
}


export const Skill: React.FC<SkillsPropsType> = ({Element, ...props}) => {

    return (
        <SkillStyled>
            <FlexWrapper direction={"column"} align={"center"}  >
                <Icon iconId={Element.id} width={"120"} height={"120"}/>
                <TitleSkills>{Element.title}</TitleSkills>
            </FlexWrapper>

        </SkillStyled>
    );
};

const SkillStyled = styled.div`
  display: inline-block;


  svg {
    @media ${Theme.media.mobile} {
      text-align: center;
      margin:0;
      padding:0;
      width:88px;
      height:88px;


    }
  }


 
`

const TitleSkills = styled.div`

  color: ${Theme.colors.font};
  //text-align: start;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  width: 140px;
  text-align: center;
 

  @media ${Theme.media.mobile} {

    margin-top:0;
   
  }
`