import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
    
    const [t, i18n] = useTranslation("global")

    return(
        <div id="experience" className="page">
            <h1>{t(Page[Page.EXPERIENCE])}</h1>
            <article>
                <ul>
                    <li>
                        <p>RatedPower</p>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("experiencePageRatedPower")}}/>
                        </ul>
                    </li>
                    <li>
                        <p>Accelya Group</p>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("experiencePageAccelya")}}/>
                        </ul>
                    </li>
                    <li>
                        <p>The Workshop — <i>Inventors of Play</i></p>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("experiencePageGraduate")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("experiencePageJunior")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("experiencePageMiddle")}}/>
                        </ul>
                    </li>
                    
                </ul>
                <p dangerouslySetInnerHTML={{__html: t("experiencePageParagraph1")}}/>
                <p dangerouslySetInnerHTML={{__html: t("experiencePageParagraph2")}}/>
                <p dangerouslySetInnerHTML={{__html: t("experiencePageParagraph3")}}/>
            </article>
        </div>
    )
}