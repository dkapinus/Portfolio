import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {Theme} from "styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconGmail"} width={"46"} height={"60"} viewBox={"0 0 46 60"}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconLinkedin"} width={"70"} height={"60"} viewBox={"0 0 70 60"}/>
                        </IconLink>
                    </SocialItem>
                    <SocialItem>
                        <IconLink>
                            <Icon iconId={"iconGit"} width={"56"} height={"60"} viewBox={"0 0 56 60"}/>
                        </IconLink>
                    </SocialItem>

                </IconWrapper>
                <Copyright>© 2024 Kapinus Dzmitry, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primary};


`

const IconWrapper = styled.ul`

  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`
const IconLink = styled.a`
  color: #00F5A0;

  &:hover {
    color: #00D9F5;
    
    svg  {
      transform: translateY(-4px);
    }
  }
`

const Copyright = styled.small`
  opacity: 0.5;
  color: ${Theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  margin: 40px 0;
  text-align: center;
`