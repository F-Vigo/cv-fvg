import "./Image.scss"
import { FC } from "react"
import img from "./fvg.jpg"

interface ImageProps {}

export const Image: FC<ImageProps> = () => {
    return(
        <div id="image_div">
            <div id="image_frame">
                <img id="img" src={img}/>
            </div>
        </div>
    )
}