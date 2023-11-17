import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    title:string
    text:string
    img:string
}

export const Work:React.FC<WorkPropsType> = ({title,text,img,...props}) => {
    return (
        <StyledWork>
            <Container>
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
            </Container>

        </StyledWork>
    );
};

const StyledWork = styled.div`

`

const Container = styled.div`
  width: 522px;
  height: 636px;
  border-radius: 6px;
  background-color: #222525;
  
`

const Image = styled.img`
  width: 522px;
  height: 388px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const WrapSteak =styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

const SteakButton =styled.button`
  border-radius: 4px;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));


  color: var(--title, #1F2626);
  text-align: center;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: 1.2px;
  text-transform: uppercase;
`