import { FC } from "react"
import { Image } from "./image/Image"
import { Data } from "./data/Data"
import { LangSelector } from "./langselector/LangSelector"
import { BackButton } from "./backbutton/BackButton"

interface AsideProps {}

export const Aside: FC<AsideProps> = () => {
    return(
        <aside id="aside">
            <div>
                <LangSelector />
                <BackButton />
                <div className="clearFloat"></div>
            </div>
            <Image />
            <Data />
        </aside>
    )
}