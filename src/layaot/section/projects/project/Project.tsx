import React from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";


type WorkPropsType = {
    title:string
    text:string
    img:string
}

export const Project:React.FC<WorkPropsType> = ({title,text,img,...props}) => {
    return (
        <StyledWork>
                <Image src={img} alt=""/>
                <Title>{title}</Title>
                <WrapSteak>
                    <SteakButton>Javascript</SteakButton>
                    <SteakButton>React</SteakButton>
                    <SteakButton>Redux</SteakButton>
                </WrapSteak>
                <Text>
                    {text}
                </Text>


        </StyledWork>
    );
};

const StyledWork = styled.div`
  width: 522px;
  height: 636px;
  border-radius: 6px;
  background-color: #222525;
`



const Image = styled.img`
  width: 522px;
  object-fit: cover;
  
  @media ${Theme.media.mobile}{
    width: 350px;
  }
`

const Title = styled.h3`
  color: ${Theme.colors.font};
  font-size: 20px;
  font-weight: 600;
  padding:25px  10px 11px 26px ;
  text-transform: uppercase;
  

`

const Text = styled.p`
  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; 
  letter-spacing: 0.64px;
  padding:20px 10px 31px 26px ;

`

const WrapSteak =styled.div`
  justify-content: center;
  display: inline-flex;
  align-items: center;
  padding: 0 26px;
  gap: 10px;
`

const SteakButton = styled.span`
  padding: 8px 16px;
  border-radius: 4px;
  background:${Theme.colors.accent};
  color: var(--title, #1F2626);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
`