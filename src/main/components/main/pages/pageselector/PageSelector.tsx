import "./PageSelector.scss"
import { FC, useContext } from "react"
import { Button } from "../../../button/Button"
import { Context } from "../../../../context/Context"
import { Page, pageList } from "../../../../const/page"
import { useTranslation } from "react-i18next"

interface PageSelectorProps {}

export const PageSelector: FC<PageSelectorProps> = () => {

    const {changeActivePage} = useContext(Context)

    const [t, i18n] = useTranslation("global")
    

    return(
        <div id="page_selector" className="page">
            <div id="button_wrapper">
                {/*
                    [
                        "Sobre mí",
                        "Experiencia laboral",
                        "Educación", "Certificados",
                        "Aptitudes",
                        "Idiomas",
                        "Otros"
                    ].map(text => <Button key={text} f={() => {}} ><p className="section_button_p">{text}</p></Button>)

                */}
                {
                    pageList
                        .filter(page => page !== Page.SELECTOR)
                        .map(page => <Button key={page} f={() => changeActivePage(page)}>
                            <p className="section_button_p">{t(Page[page])}</p>
                        </Button>)
                }
            </div>
        </div>
    
    )
}