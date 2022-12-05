import "./LangSelector.scss"
import { FC, useState } from "react"
import { getLangFullName, Lang, langList } from "../../../const/Lang"
import { useTranslation } from "react-i18next"

interface LangSelectorProps {}

export const LangSelector: FC<LangSelectorProps> = () => {

    const [pressed, setPressed] = useState<boolean>(false)
    const classNamePressed = pressed ? "pressed" : "unpressed"

    const [t, i18n] = useTranslation("global")

    window.addEventListener("click", function(e) {   
        if (pressed && !document.getElementById("lang_selector")!.contains(e.target as HTMLDivElement)) {
            setPressed(false)
        }
    })

    const langSelected = (lang: Lang): void => {
        setPressed(false)
        console.log("Language: " + lang)
        i18n.changeLanguage(lang)
    }


    return(
        <div id="lang_selector">
            <button id="lang_selector_button" onClick={() => setPressed(!pressed)}>
                <p><i className="icon fa-solid fa-language"/></p>
            </button>
            <ul id="lang_selector_ul" className={classNamePressed}>
                {
                    langList.map((lang: Lang) => <li key={lang} onClick={() => langSelected(lang)}>{getLangFullName(lang)}</li>)
                }
            </ul>
        </div>
    )
}