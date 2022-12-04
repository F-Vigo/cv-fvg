import "./LangSelector.scss"
import { FC, useState } from "react"

interface LangSelectorProps {}

export const LangSelector: FC<LangSelectorProps> = () => {

    const [pressed, setPressed] = useState<boolean>(false)
    const classNamePressed = pressed ? "pressed" : "unpressed"

    window.addEventListener("click", function(e) {   
        if (pressed && !document.getElementById("lang_selector")!.contains(e.target as HTMLDivElement)) {
            setPressed(false)
        }
    })

    const langSelected = (): void => {
        setPressed(false)
        //changeActiveLang(lang)
    }


    return(
        <div id="lang_selector">
            <button id="lang_selector_button" onClick={() => setPressed(!pressed)}>
                <p><i className="icon fa-solid fa-language"></i></p>
            </button>
            <ul className={classNamePressed}>
                <li onClick={() => langSelected()}>English</li>
                <li onClick={() => langSelected()}>Español</li>
            </ul>
        </div>
    )
}