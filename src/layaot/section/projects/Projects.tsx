import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {TitleSection} from "components/TitleSection";
import {Project} from "layaot/section/projects/project/Project";
import imageWorks from "../../../assets/images/image.jpg"
import {Container} from "components/container/Container";
import {Theme} from "styles/Theme";
import {Fade} from "react-awesome-reveal";


const ProjectData = ["React", "JS", "HTML", "Redux"]

export const Projects = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1140;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);


    const displayedProjects = width <= breakpoint ? ProjectData.slice(0, Math.ceil(ProjectData.length / 2)) : ProjectData;

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
                            <Project key={index} id={index} img={imageWorks} title={el}
                                     text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                                         "                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"}/>
                        )
                    })}
                    </Fade>
                  {width <= breakpoint ? <ButtonProject><span>SEE ALL PROJECTS</span></ButtonProject> : ""}
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
  margin: 0 auto;
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
