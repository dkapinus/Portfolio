import React from 'react';
import {Icon} from "components/icon/Icon";
import {animateScroll} from "react-scroll";

export const Logo = () => {

    return (
        <div>
            <a onClick={()=>animateScroll.scrollToTop()}>
                <Icon iconId={"react"}/>
            </a>
        </div>
    );
};

