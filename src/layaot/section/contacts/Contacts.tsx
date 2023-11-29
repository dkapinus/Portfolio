import React from 'react';
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Container} from "components/container/Container";
import {Theme} from "styles/Theme";


export const Contacts = () => {


    return (
        <StyledContacts>
            <Container>
                <TitleSection>
                    Contacts
                </TitleSection>
                <StyledForms>

                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Email"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}><span>Submit</span></Button>
                </StyledForms>
            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`

position: relative;

`

const StyledForms = styled.form`
  margin: 0 auto;
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  textarea {
    resize: none;
    height: 165px;
  }
`

const Field = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid ${Theme.colors.font};
  background-color: ${Theme.colors.primary};
  padding: 7px 15px;

  color: ${Theme.colors.font};
  font-size: 16px;
  font-weight: 500;
  
  &::placeholder{

    color: var(--gray, #919B9B);
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    
  }
  
  &:focus-visible {
    outline: 1px solid ${Theme.colors.font};
  }
 

`

const Button = styled.button`
  display: flex;
  max-width: 532px;
  width: 100%;
  
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));

  span {
    color: #252728;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  
  @media ${Theme.media.mobile} {
    max-width: 332px;
    width: 100%;
  }
`