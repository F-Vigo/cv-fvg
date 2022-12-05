import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "../../../const/page"

interface LanguagesProps {}

export const Languages: FC<LanguagesProps> = () => {

    const [t, i18n] = useTranslation("global")

    return(
        <div className="page" id="languages">
            <h1>{t(Page[Page.LANGUAGES])}</h1>
            <article>
                <ul>
                    <li dangerouslySetInnerHTML={{__html: t("languagesPageES")}}/>
                    <li dangerouslySetInnerHTML={{__html: t("languagesPageEN")}}/>
                </ul>
            </article>
        </div>
    )
}