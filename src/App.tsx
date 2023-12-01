import {Header} from "layaot/header/Header";
import {Main} from "layaot/section/main/Main";
import {AboutMe} from "layaot/section/aboutMe/AboutMe";
import {Skills} from "layaot/section/skills/Skills";
import {Projects} from "layaot/section/projects/Projects";
import {Contacts} from "layaot/section/contacts/Contacts";
import {Footer} from "layaot/footer/Footer";
import {Particle} from "components/particls/Particle";
import {GoDownBtn} from "components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <GoDownBtn/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
