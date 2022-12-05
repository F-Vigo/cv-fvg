import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {

    const [t, i18n] = useTranslation("global")

    return(
        <div className="page" id="skills">
            <h1>{t(Page[Page.SKILLS])}</h1>
            <article>
                <ul>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("skillsPageJavaRelated")}}/>
                        <ul>
                            <li>Java.</li>
                            <li>Scala.</li>
                            <li dangerouslySetInnerHTML={{__html: t("skillsPageSpring")}}/>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("skillsPageJSRelated")}}/>
                        <ul>
                            <li>HTML5 (HTML + CSS + JavaScript).</li>
                            <li>Typescript.</li>
                            <li>React.js.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("skillsPageOtherLanguages")}}/>
                        <ul>
                            <li>Python.</li>
                            <li>R.</li>
                        </ul>
                    </li>

                    <li>
                        <p style={{display: "inline"}} dangerouslySetInnerHTML={{__html: t("skillsPageOthers")}}/>
                        <ul>
                            <li>Git.</li>
                            <li>SQL.</li>
                            <li>Google Sheets.</li>
                            <li>LaTeX.</li>
                        </ul>
                    </li>
                </ul>


            </article>
        </div>
    )
}