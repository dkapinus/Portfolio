import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {TitleSection} from "components/TitleSection";
import {Project} from "layaot/section/projects/project/Project";
import imageWorks from "../../../assets/images/image.jpg"
import {Container} from "components/container/Container";
import {Theme} from "styles/Theme";
import {Fade} from "react-awesome-reveal";




const ProjectData = [
    {title: "Portfolio 2", link: "https://dkapinus.github.io/CopySvetaPortfolio/",
        text:"Other educational portfolios are also presented for your attention.",
    steak:["react","styled component","javascript", "typescript"]},
    {title:"todolist", link: "https://dkapinus.github.io/todolist/", text: "The main project on which all important skills were practiced (application architecture," +
            " functionality, working with backend requests) and libraries.",
        steak:["react","javascript", "typescript","redux","thunk"]},
    {title:"social media",link:"https://dkapinus.github.io/samurai-way/", text: "The main project on which all important skills were practiced (application architecture," +
            " functionality, working with backend requests) and libraries.",
        steak:["react","javascript", "typescript","redux","thunk"]},
    { title:"counter",link:"https://dkapinus.github.io/Clicker/", text: "Small educational project",
        steak:["react","javascript", "typescript"]},


]


export const Projects = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1140;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);


    const displayedProjects = width <= breakpoint ? ProjectData.slice(0, Math.ceil(ProjectData.length / 2)) : ProjectData;

    const onClickHandlerButton =()=> {
        setWidth(1200)
    }

    return (
        <StyledWork id={"projects"}>
            <Container>
                <TitleSection>
                    Projects
                </TitleSection>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"center"}>
                    <Fade cascade={true}
                          damping={0.2}
                    >

                    {displayedProjects.map((el, index) => {
                        return (
                            <Project key={index} id={index}
                                     img={imageWorks}
                                     title={el.title}
                                     link={el.link}
                                     text={el.text}
                                     steak={el.steak}
                            />
                        )
                    })}
                    </Fade>
                  {width <= breakpoint ? <ButtonProject onClick={onClickHandlerButton}><span>SEE ALL PROJECTS</span></ButtonProject> : ""}
                </FlexWrapper>

            </Container>

        </StyledWork>
    );
};


const StyledWork = styled.section`
  position: relative;
  display: flex;
  
  ${FlexWrapper} {
    gap: 20px;

  

    @media ${Theme.media.bigTablet} {
      justify-content: center;
      flex-direction:column;
      align-items: center;
    }
  }

`;

const ButtonProject = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 305px;
  width: 100%;
  height: 56px;
  padding: 12px 20px 13px 20px;
  gap: 10px;
  border-radius: 6px;
  background: ${Theme.colors.accent};

  transition: .8s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  span {
    color: #252728;
    font-size: 16px;
    font-weight: 500;

  }
`
