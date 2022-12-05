import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface EducationProps {}

export const Education: FC<EducationProps> = () => {

    const [t, i18n] = useTranslation("global")

    return(
        <div className="page" id="education">
            <h1>{t(Page[Page.EDUCATION])}</h1>
            <article>
                <ul>
                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("educationPageUniversity")}}/>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageUniversityLi1")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageUniversityLi2")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageUniversityLi3")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageUniversityLi4")}}/>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("educationPageNonUniversity")}}/>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageNonUniversityLi1")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageNonUniversityLi2")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageNonUniversityLi3")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageNonUniversityLi4")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageNonUniversityLi5")}}/>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("educationPageLanguages")}}/>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageLanguagesLi1")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageLanguagesLi2")}}/>
                            <li dangerouslySetInnerHTML={{__html: t("educationPageLanguagesLi3")}}/>
                        </ul>
                    </li>
                </ul>


            </article>
        </div>
    )
}