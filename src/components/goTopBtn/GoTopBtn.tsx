import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { animateScroll } from "react-scroll";
import {Theme} from "styles/Theme";

export const GoDownBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.offsetHeight;
            const bottomThreshold = fullHeight - windowHeight - 200; // Нижний порог, на котором кнопка будет скрыта

            if (scrollPosition > -10 && scrollPosition < bottomThreshold) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        animateScroll.scrollToBottom();
    };

    return (
        <>
            {showBtn && (
                <StyledGoDownBtn onClick={handleClick}>
                    <Icon iconId={"arrow"} width={"32"} height={"32"} viewBox={"0 0 32 32"} />
                </StyledGoDownBtn>
            )}
        </>
    );
};

const StyledGoDownBtn = styled.button`
  background-color: rgba(4, 31, 49, 0.5);
  padding: 8px;
  position: fixed;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  z-index: 99999;
 
  @media ${Theme.media.mobile}{
    display: none;
  }
`;