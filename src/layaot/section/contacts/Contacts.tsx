import React from 'react';
import styled from "styled-components";
import {TitleSection} from "components/TitleSection";
import {Container} from "components/container/Container";


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
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Submit</Button>
                </StyledForms>
            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`

  min-height: 50vh;

`

const StyledForms = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px
`

const Field = styled.input`

`

const Button = styled.button`
`