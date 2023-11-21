import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import {Theme} from "styles/Theme";
import {FlexWrapper} from "components/FlexWrapper";


type SkillsPropsType = {
    iconId: string
}


export const Skill: React.FC<SkillsPropsType> = ({iconId, ...props}) => {

    return (
        <SkillStyled>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={iconId} width={"120"} height={"120"}/>
                <TitleSkills>{iconId}</TitleSkills>
            </FlexWrapper>

        </SkillStyled>
    );
};

const SkillStyled = styled.div`

`

const TitleSkills = styled.div`

  color: ${Theme.colors.font};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 20px;
`