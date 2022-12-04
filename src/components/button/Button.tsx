import "./Button.scss"
import { FC } from "react"

interface ButtonProps {
    children: JSX.Element
    f: () => void,
}

export const Button: FC<ButtonProps> = ({ children, f }) => {
    return(
        <button className="button_button" onClick={f}>
            <div className="button_div">
                {children}
                {/*                 <p className="button_p">{text}</p> */}            </div>
        </button>
    )
}