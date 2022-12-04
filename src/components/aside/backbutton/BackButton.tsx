import "./BackButton.scss"
import { FC, useContext } from "react"
import { Context } from "../../../context/Context"
import { Page } from "../../../const/page"

interface BackButtonProps {}

export const BackButton: FC<BackButtonProps> = () => {

    const {activePage, changeActivePage} = useContext(Context)

    const opacity: number = activePage === Page.SELECTOR ? 0 : 1
    const onClick = (): void => {
        if(activePage !== Page.SELECTOR) {
            changeActivePage(Page.SELECTOR)
        }
    }

    return(
        <button id="back_button" style={{opacity: opacity}} onClick={onClick}>
            <i className="icon fa-solid fa-circle-left"></i>
        </button>
    )
}