import React from 'react';
import styled from "styled-components";
import {Theme} from "styles/Theme";


type WorkPropsType = {
    title: string
    link:string
    text: string
    img: string
    id: number
    steak:string[]
}



export const Project: React.FC<WorkPropsType> = ({title,link, text, img,steak, ...props}) => {
    return (
        <StyledWork >
            <Image src={img} alt=""/>
            <Title  href={link}>{title}</Title>
            <WrapSteak>
                {steak.map((el,index)=>{
                    return (
                        <SteakButton key={index}>{el}</SteakButton>
                    )
                })}
            </WrapSteak>
            <Text>
                {text}
            </Text>


        </StyledWork>
    );
};

const StyledWork = styled.div`

  max-width: 522px;
  height: 600px;
  width:100%;
  
  border-radius: 6px;
  background-color: #222525;
  
  

  

  @media ${Theme.media.mobile} {
    max-width: 350px;
    width:100%;
  }

  

`


const Image = styled.img`
  width: 100%;
  object-fit: cover;

  

`

const Title = styled.a`
  display: block;
  color: ${Theme.colors.font};
  font-size: 20px;
  font-weight: 600;
  padding: 25px 10px 11px 26px;
  text-transform: uppercase;
  cursor: pointer;


`

const Text = styled.p`
  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
  padding: 20px 10px 31px 26px;

`

const WrapSteak = styled.div`
  justify-content: center;
  display: inline-flex;
  align-items: center;
  padding: 0 26px;
  flex-wrap: wrap;
  gap: 10px;
`

const SteakButton = styled.span`
  
  padding: 8px 16px;
  border-radius: 4px;
  background: ${Theme.colors.accent};
  color: var(--title, #1F2626);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
`