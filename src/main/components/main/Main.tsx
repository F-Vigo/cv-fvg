import "./Main.scss"
import { FC, ReactElement, useContext } from "react"
import { PageSelector } from "./pages/pageselector/PageSelector"
import { About } from "./pages/About"
import { Experience } from "./pages/Experience"
import { Page } from "../../const/page"
import { Context } from "../../context/Context"
import { Education } from "./pages/Education"
import { Skills } from "./pages/Skills"
import { Languages } from "./pages/Languages"
import { Other } from "./pages/Other"

interface MainProps {}

export const Main: FC<MainProps> = () => {

    const {activePage} = useContext(Context)
    
    const renderSwitch = (): ReactElement => {
        switch(activePage) {
        case Page.SELECTOR:
            return <PageSelector/>
        case Page.ABOUT:
            return <About />
        case Page.EXPERIENCE:
            return <Experience />
        case Page.EDUCATION:
            return <Education />
        case Page.SKILLS:
            return <Skills />
        case Page.LANGUAGES:
            return <Languages />
        case Page.OTHER:
            return <Other />

        default:
            return <></>
        }
    }

    return(
        <main id="main">
            {renderSwitch()}
        </main>
    )
}