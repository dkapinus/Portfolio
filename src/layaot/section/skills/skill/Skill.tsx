import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";


type SkillsPropsType = {
iconId:string
}


export const Skill:React.FC<SkillsPropsType> = ({iconId,...props}) => {

    return (
        <SkillStyled>
                        <div>
                            <Icon  iconId={iconId} width={"100"} height={"100"}/>
                            <div>{iconId}</div>
                        </div>

        </SkillStyled>
    );
};

const SkillStyled = styled.div`
 width: 33%;
  gap: 30px;
`