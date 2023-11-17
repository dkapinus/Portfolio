import {Header} from "layaot/header/Header";
import {Main} from "layaot/section/main/Main";
import {AboutMe} from "layaot/section/aboutMe/AboutMe";
import {Skills} from "layaot/section/skills/Skills";
import {Works} from "layaot/section/works/Works";
import {Contacts} from "layaot/section/contacts/Contacts";
import {Footer} from "layaot/footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
