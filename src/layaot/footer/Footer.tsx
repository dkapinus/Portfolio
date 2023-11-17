import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconGmail"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconLinkedin"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconGit"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        </IconLink>
                    </SocialItem>

                </IconWrapper>
                <Copyright>© 2024 Kapinus Dima, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #041F31;
  min-height: 50vh;

`

const IconWrapper = styled.ul`

  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`
const IconLink = styled.a`

`

const Copyright = styled.small`
  opacity: 0.5;
`