import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface AboutProps {}

export const About: FC<AboutProps> = () => {
    
    const [t, i18n] = useTranslation("global")

    return(
        <div id="about" className="page">
            <h1>{t(Page[Page.ABOUT])}</h1>
            <article>
                {
                    [1,2,3,4].map(i => <p key={i} dangerouslySetInnerHTML={{__html: t(`aboutPageParagraph${i}`)}}/>)
                }
            </article>
        </div>
    )
}